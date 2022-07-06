const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const databaseConfig = require("./config/database.config");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

dotenv.config();

databaseConfig.MongoDB().catch((err) => console.log(err));

app.use("/", () => console.log("Server running"));

app.listen(process.env.PORT || 3000, () => console.log("server listening"));
