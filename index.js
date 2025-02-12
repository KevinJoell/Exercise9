const express = require("express");
const app = express();
const port = 3200;
const db = require("../db");

app.use(express.json());

const studentController = require("./src/student/studentControllers");

app.use("/students", studentController);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
