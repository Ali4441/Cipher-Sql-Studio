const express = require("express");
const app = express();
const assignmentsRouter = require("./routes/assignments")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api", assignmentsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));