import React from "react";
import { AppBar, Toolbar, Typography, Button} from "@mui/material";
import { Link} from "react-router-dom";
import { useSelector} from "react-redux";


const Navbar = () => {
  const { user } = useSelector((state) => state.auth);


  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#71C0BB" }} 
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Task Manager
          </Link>
        </Typography>

        {user ? (
          <>
            <Button
              sx={{ color: "white", "&:hover": { backgroundColor: "#5aa8a4" } }}
              component={Link}
              to="/tasks"
            >
              Tasks
            </Button>

            {user.role === "admin" && (
              <Button
                sx={{ color: "white", "&:hover": { backgroundColor: "#5aa8a4" } }}
                component={Link}
                to="/admin/tasks"
              >
                Admin Tasks
              </Button>
            )}

            <Button
              sx={{ color: "white", "&:hover": { backgroundColor: "#5aa8a4" } }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              sx={{ color: "white", "&:hover": { backgroundColor: "#5aa8a4" } }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              sx={{ color: "white", "&:hover": { backgroundColor: "#5aa8a4" } }}
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
