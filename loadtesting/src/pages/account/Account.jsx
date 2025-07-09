import React, { useState } from "react";
import { Avatar, Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { getNames } from "country-list";

const Account = () => {
  const [profileImage, setProfileImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [tempFirstName, setTempFirstName] = useState("Avinash");
  const [tempLastName, setTempLastName] = useState("Singh");
  const [tempCountry, setTempCountry] = useState("");
  const [tempPhoneNumber, setTempPhoneNumber] = useState("");
  const [email, setEmail] = useState("avisingh0002@gmai.com");
  const countries = getNames();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleSave = () => {
    // UI-only save handler (integration would go here)
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <Box className="flex flex-col md:flex-row items-center justify-between mb-6">
        <Box className="flex items-center gap-4 mb-4 md:mb-0">
          <label htmlFor="avatar-upload">
            <Avatar
              alt="User Avatar"
              src={profileImage}
              sx={{ width: 64, height: 64, cursor: "pointer" }}
            />
          </label>

          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          <Box>
            <Typography variant="h6" className="font-semibold">
              {tempFirstName} {tempLastName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {email}
            </Typography>
          </Box>
        </Box>

        <Box className="flex gap-2">
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => setIsEditing(!isEditing)}
            sx={{
              backgroundColor: "#006064",
              color: "white",
              "&:hover": { backgroundColor: "#274B4B" },
            }}
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>

          {isEditing && (
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                backgroundColor: "#00796B",
                color: "white",
                "&:hover": { backgroundColor: "#004D40" },
              }}
            >
              Save
            </Button>
          )}
        </Box>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 w-full">
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          value={tempFirstName}
          disabled={!isEditing}
          onChange={(e) => setTempFirstName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#006064" },
              "&:hover fieldset": { borderColor: "#004D4D" },
              "&.Mui-focused fieldset": { borderColor: "#006064" },
            },
          }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          value={tempLastName}
          disabled={!isEditing}
          onChange={(e) => setTempLastName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#006064" },
              "&:hover fieldset": { borderColor: "#004D4D" },
              "&.Mui-focused fieldset": { borderColor: "#006064" },
            },
          }}
        />
        <TextField
          label="Email ID"
          variant="outlined"
          fullWidth
          value={email}
          disabled
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#006064" },
              "&:hover fieldset": { borderColor: "#004D4D" },
              "&.Mui-focused fieldset": { borderColor: "#006064" },
            },
          }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={tempPhoneNumber}
          onChange={(e) => setTempPhoneNumber(e.target.value)}
          fullWidth
          disabled={!isEditing}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#006064" },
              "&:hover fieldset": { borderColor: "#004D4D" },
              "&.Mui-focused fieldset": { borderColor: "#006064" },
            },
          }}
        />
        <TextField
          select
          label="Country"
          value={tempCountry}
          onChange={(e) => setTempCountry(e.target.value)}
          variant="outlined"
          disabled={!isEditing}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#006064" },
              "&:hover fieldset": { borderColor: "#004D4D" },
              "&.Mui-focused fieldset": { borderColor: "#006064" },
            },
          }}
        >
          {countries.map((country, index) => (
            <MenuItem key={index} value={country}>
              {country}
            </MenuItem>
          ))}
        </TextField>
      </Box>

    
    </div>
  );
};

export default Account;