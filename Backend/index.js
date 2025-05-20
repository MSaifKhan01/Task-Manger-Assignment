const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Wellcome To The Mern Task Management");
});
app.use("/auth", userRouter);
app.use("/tasks", taskRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log("DB Connected Succesfully");
  } catch (error) {}
  console.log(`Server running on port ${PORT}`);
});
