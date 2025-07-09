import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideImage from "./resources/right.png";
import Logo from "./resources/Logo1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
    setTimeout(() => {
      setShowPassword(false);
    }, 2000);
  };

const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  
  if (!email || !password) {
    setError("Please fill in all fields");
    return;
  }

  setIsLoading(true);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // Store token and user data
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // Redirect to the intended page or default to /new
    const from = location.state?.from?.pathname || "/new";
    navigate(from, { replace: true });

  } catch (error) {
    setError(error.message || 'An error occurred during login');
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="flex h-screen">
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

          <h1 className="text-2xl mb-10">
            <div>Welcome Back to</div>
            <div>Load Testing</div>
          </h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="flex items-center border rounded relative">
                <input
                  className="w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#33A9C8]"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {password && (
                  <span
                    onClick={handleShowPassword}
                    className="w-7 cursor-pointer absolute right-2 bg-transparent"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#27A8C0] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#1f8696] focus:outline-none focus:ring-2 focus:ring-[#33A9C8] disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <div className="flex justify-between text-sm items-center mt-4">
            <a href="#" className="text-black hover:text-teal-500">
              Forgot password?
            </a>
            <span className="text-black flex items-center">
              Create an account.&nbsp;
              <a
                onClick={() => navigate("/sign-up")}
                className="text-[#006064] font-bold hover:underline ml-1 cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                SignUp →
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={SideImage}
          alt="Side Background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;