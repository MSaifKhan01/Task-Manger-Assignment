import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllTasksAdmin,
  deleteTask,
  updateTask,
  adminFilterTasks,
} from "../../features/tasks/taskSlice";


const categories = [
  "All",
  "Work",
  "Health",
  "Finance",
  "Personal",
  "Shopping",
  "Others",
];


const AdminTaskList = () => {
  const dispatch = useDispatch();
 

  const { tasks, loading, error } = useSelector((state) => state.tasks);

  const [filterCategory, setFilterCategory] = useState("All");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    dispatch(fetchAllTasksAdmin());
    
  }, [dispatch]);

 
useEffect(() => {
  const filters = {};
  if (filterCategory !== "All") filters.category = filterCategory;
  if (filterDate) filters.dueDate = filterDate;

  if (filterCategory === "All" && filterDate === "") {
    dispatch(fetchAllTasksAdmin());
  } else {
    dispatch(adminFilterTasks(filters));
  }
}, [filterCategory, filterDate, dispatch]);


 
 
  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(id));
    }
  };

  const handleToggleComplete = async (task) => {
  try {
    await dispatch(
      updateTask({
        id: task._id,
        taskData: { completed: !task.completed },
      })
    ).unwrap();

    dispatch(fetchAllTasksAdmin());
  } catch (error) {
    console.error("Failed to update task:", error);
  }
};


  return (
    <Container sx={{ mt: 6 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
         <Typography variant="h5">All Tasks (Admin)</Typography>
 
      </Box>

      <Box display="flex" gap={2} mb={3} flexWrap="wrap">
        <TextField
          select
          label="Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          sx={{ minWidth: 150 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Due Date"
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ minWidth: 180 }}
        />
      </Box>

      {loading && <CircularProgress />}

      {error && <Alert severity="error">{error}</Alert>}

      {!loading && tasks.length === 0 && <Typography>No tasks found.</Typography>}

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} md={6} lg={4} key={task._id}>
            <Box
              p={2}
              border={1}
              borderColor={task.completed ? "success.main" : "grey.300"}
              borderRadius={2}
              bgcolor={task.completed ? "#d0f0c0" : "background.paper"}
            >
              <Typography variant="h6" color={task.completed ? "success.main" : "text.primary"}>
                {task.title}
              </Typography>

              <Typography variant="body2" color="textSecondary">
                Category: {task.category}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Due Date: {new Date(task.dueDate).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" mt={1}>
                {task.description}
              </Typography>

              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
               <Button
  size="small"
  variant="outlined"
  color={task.completed ? "warning" : "success"}
  onClick={() => handleToggleComplete(task)}  // Correct toggle handler here
>
  {task.completed ? "Mark Incomplete" : "Mark Complete"}
</Button>


                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminTaskList;
