import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks"; // Your backend task routes

// Setup token header helper
const config = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Async thunks

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.get(API_URL, config(token));
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchTaskById = createAsyncThunk(
  "tasks/fetchTaskById",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.get(`${API_URL}/${id}`, config(token));
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (taskData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.post(API_URL, taskData, config(token));
      console.log(res)
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, taskData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.patch(`${API_URL}/${id}`, taskData, config(token));
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      await axios.delete(`${API_URL}/${id}`, config(token));
      return id;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Admin routes
export const fetchAllTasksAdmin = createAsyncThunk(
  "tasks/fetchAllTasksAdmin",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.get(`${API_URL}/admin/all`, config(token));
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteTaskAdmin = createAsyncThunk(
  "tasks/deleteTaskAdmin",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      await axios.delete(`${API_URL}/admin/${id}`, config(token));
      return id;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Filter tasks
export const filterTasks = createAsyncThunk(
  "tasks/filterTasks",
  async (filters, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.user.token;
      const query = new URLSearchParams(filters).toString();
      const res = await axios.get(`${API_URL}/filter?${query}`, config(token));
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);




const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    singleTask: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSingleTask: (state) => {
      state.singleTask = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchTaskById
      .addCase(fetchTaskById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleTask = null;
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleTask = action.payload;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // addTask
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // updateTask
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tasks.findIndex(t => t._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
        if (state.singleTask && state.singleTask._id === action.payload._id) {
          state.singleTask = action.payload;
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      // deleteTask
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t._id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Admin fetchAllTasksAdmin
      .addCase(fetchAllTasksAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTasksAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchAllTasksAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin deleteTaskAdmin
      .addCase(deleteTaskAdmin.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t._id !== action.payload);
      })
      .addCase(deleteTaskAdmin.rejected, (state, action) => {
        state.error = action.payload;
      })

      // filterTasks
      .addCase(filterTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(filterTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSingleTask } = taskSlice.actions;
export default taskSlice.reducer;
