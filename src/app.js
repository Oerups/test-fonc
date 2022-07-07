const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const databaseConfig = require("./config/database.config");

const userRouter = require("./routes/user.route");
const todolistRouter = require("./routes/todolist.route");
const taskRouter = require("./routes/task.route");
const authRouter = require("./routes/auth.route");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

dotenv.config();

databaseConfig.MongoDB().catch((err) => console.log(err));

app.use("/", () => console.log("Server running"));
app.use("/user", userRouter);
app.use("/todolist", todolistRouter);
app.use("/task", taskRouter);
app.use("/auth", authRouter);

// app.listen(process.env.PORT || 3000, () => console.log("server listening"));
