const reservationRoutes = require("./routes/reservations");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/reservations", reservationRoutes);
// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ✅ Connect MongoDB THEN start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000} 🚀`);
    });

  })
  .catch(err => console.log(err));