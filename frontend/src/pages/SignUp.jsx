import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("none");
  const [validationError, setValidationError] = useState("");
let message= localStorage.getItem("msg")
    if (message&&message.message==="User registered successfully") {
      navigate("/login");
    }

  useEffect(() => {
  const message = localStorage.getItem("msg");
    if (message) {
      try {
        const parsedMsg = JSON.parse(message);
        if (parsedMsg.message === "User registered successfully") {
          localStorage.removeItem("msg"); // cleanup
          navigate("/login");
        }
      } catch (err) {
        console.error("Invalid JSON in localStorage:msg");
      }
    }

    return () => {
      dispatch(clearError());
      setValidationError("");
    };
  }, [message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
      return;
    }

    setValidationError("");

    const userData = {
      username,
      email,
      password,
    };

    // Only include role if not "none"
    if (role !== "none") {
      userData.role = role;
    }

    dispatch(registerUser(userData));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Sign Up
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {validationError && <Alert severity="warning" sx={{ mb: 2 }}>{validationError}</Alert>}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="name"
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            value={role}
            label="Role"
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          fullWidth
            sx={{
    mt: 3,
    backgroundColor: "#71C0BB",
    "&:hover": {
      backgroundColor: "#5aa8a4",
    },
  }}
          disabled={loading}
        >
          {loading ? "Registering..." : "Sign Up"}
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
