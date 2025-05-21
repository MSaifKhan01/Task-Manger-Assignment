import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Paper,
  Button,
  Alert,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from '../utils/token';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTask = async () => {
    setLoading(true);
    try {
      const token = getToken();
      const response = await axios.get(`/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTask(response.data);
      setError("");
    } catch (err) {
      setError(err?.response?.data?.message || "Error fetching task.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, [id]);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;

  if (error) return <Alert severity="error">{error}</Alert>;

  if (!task) return null;

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Category: {task.category}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Due Date: {new Date(task.dueDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {task.description}
        </Typography>
        <Typography variant="body2" color={task.completed ? "green" : "orange"}>
          Status: {task.completed ? "Completed" : "Incomplete"}
        </Typography>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button variant="contained" onClick={() => navigate(`/tasks/${id}/edit`)}>
            Edit
          </Button>
          <Button variant="outlined" onClick={() => navigate("/tasks")}>
            Back to Tasks
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default TaskDetails;
