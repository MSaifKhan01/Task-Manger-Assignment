

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, fetchTaskById, clearSingleTask } from "../features/tasks/taskSlice";



const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isEditMode = !!id;

  // Select task state from redux
  const { singleTask, loading, error } = useSelector((state) => state.tasks);

  // Local state for controlled form inputs
  const [taskData, setTaskData] = useState({
    title: "",
    category: "",
    dueDate: "",
  });

  // Sync redux singleTask to local form state when fetched
  useEffect(() => {
    if (isEditMode) {
      dispatch(fetchTaskById(id));
    }
    return () => {
      dispatch(clearSingleTask());
    };
  }, [dispatch, id, isEditMode]);

  useEffect(() => {
    if (singleTask && isEditMode) {
      setTaskData({
        title: singleTask.title || "",
        category: singleTask.category || "",
        dueDate: singleTask.dueDate ? singleTask.dueDate.split("T")[0] : "",
      });
    }
  }, [singleTask, isEditMode]);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditMode) {
      await dispatch(updateTask({ id, taskData })).unwrap();
    } else {
      await dispatch(addTask(taskData)).unwrap();
    }
    navigate("/tasks");
  };

  const categories = [
    "Work",
    "Health",
    "Finance",
    "Personal",
    "Shopping",
    "Others",
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        {isEditMode ? "Edit Task" : "New Task"}
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {loading && <CircularProgress sx={{ mt: 2 }} />}

      {!loading && (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            select
            fullWidth
            label="Category"
            name="category"
            value={taskData.category}
            onChange={handleChange}
            margin="normal"
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Due Date"
            name="dueDate"
            type="date"
            value={taskData.dueDate}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />

          <Box mt={3}>
            <Button type="submit" variant="contained" fullWidth>
              {isEditMode ? "Update Task" : "Create Task"}
            </Button>
          </Box>
        </form>
      )}
    </Container>
  );
};

export default TaskForm;
