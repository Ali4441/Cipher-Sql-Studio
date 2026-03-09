const express = require("express");
const cors = require("cors");

const app = express();
const assignmentsRouter = require("./routes/assignments");

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://cipher-sql-studio-beta.vercel.app"
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Postman etc.
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy does not allow access from this origin';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", assignmentsRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server failed to start", error);
  }
};

startServer();