import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import SideImage from "../login/resources/right.png";
import Logo from "../login/resources/Logo1.png";
import { getNames } from "country-list";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    country: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Changed to 6 digits
  const [otpVerified, setOtpVerified] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const countries = getNames();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
    if (!showPassword) {
      setTimeout(() => setShowPassword(false), 4000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto focus to next input
      if (value && index < 5) { // Changed to 5 for 6 digits
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const verifyOtp = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) { // Changed to 6 digits
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp: otpString,
          email: formData.email
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'OTP verification failed');
      }

      setOtpVerified(true);
      setShowOtpModal(false);
      setApiMessage("OTP verified successfully! Redirecting to login...");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/log-in");
      }, 2000);

    } catch (error) {
      setError(error.message || 'An error occurred during OTP verification');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          mobile: formData.phone,
          country: formData.country
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setApiMessage("OTP sent to your email. Please verify to complete registration.");
      setShowOtpModal(true);
      
    } catch (error) {
      setError(error.message || 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-10">
            <img src={Logo} alt="Logo" className="w-20 h-20" />
            <div className="ml-4">
              <span
                className="text-2xl font-extrabold"
                style={{ color: "#00ACC1" }}
              >
                LOAD
              </span>
              <span
                className="text-2xl font-extrabold"
                style={{ color: "#FFB400" }}
              >
                TESTING
              </span>
            </div>
          </div>

          <h1 className="text-2xl mb-6 mt-[-20px]">
            <div>Welcome To Load Testing</div>
          </h1>
          {apiMessage && (
            <div className={`mb-4 p-3 rounded ${otpVerified ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
              {apiMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="flex items-center border rounded relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                  placeholder="********"
                  required
                />
                {formData.password && (
                  <span
                    onClick={handleShowPassword}
                    className="w-7 cursor-pointer absolute right-2 bg-transparent"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                placeholder="********"
                required
              />
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone No.
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                  inputClassName="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#27A8C0] text-white font-semibold py-2 rounded hover:bg-[#1f8696] focus:outline-none focus:ring-2 focus:ring-[#33A9C8] disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Signup'}
            </button>
          </form>
          <div className="flex justify-between text-sm items-center mt-2">
            <a href="#" className="text-black hover:text-teal-500">
              Forgot password?
            </a>

            <span className="text-black flex items-center">
              Already have account?&nbsp;
              <a
                onClick={() => navigate("/log-in")}
                className="text-[#006064] font-bold hover:underline ml-1 cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                Login →
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={SideImage}
          alt="Side Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* OTP Verification Modal */}
    {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Verify Your Email</h2>
            <p className="mb-4">We've sent a 6-digit OTP to {formData.email}</p>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter 6-digit OTP
              </label>
              <div className="flex gap-2 justify-center">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    maxLength={1}
                    className="w-12 h-12 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#33A9C8] text-xl"
                    autoFocus={index === 0}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  setOtp(["", "", "", "", "", ""]);
                  setError(null);
                }}
                className="text-[#27A8C0] text-sm hover:underline"
              >
                Clear OTP
              </button>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowOtpModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="bg-[#27A8C0] text-white px-4 py-2 rounded-md hover:bg-[#2399ad] disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
