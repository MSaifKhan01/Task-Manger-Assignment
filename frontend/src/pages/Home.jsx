import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      textAlign="center"
      px={2}
    >
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Welcome to Task Manager
      </Typography>

      <Typography variant="h6" color="textSecondary" mb={4}>
        Organize your work. Stay productive. Manage your tasks easily.
      </Typography>

      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
