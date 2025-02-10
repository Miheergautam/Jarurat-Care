require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Jarurat Care Backend API is Running!");
});

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/resources", require("./routes/resourceRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
