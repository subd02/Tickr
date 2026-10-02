const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./model/UsersModel");

const cors= require("cors");
const bodyParser= require("body-parser");
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";
const {
    HoldingsModel
} = require("./model/HoldingsModel")
const {
    PositionsModel
} = require("./model/PositionsModel")

const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Database Connection Logic
async function main() {
    console.log("Attempting connection to MongoDB Atlas...");
    await mongoose.connect(URI, {
        serverSelectionTimeoutMS: 5000
    });
}

main().then(() => {
    console.log("Connection successful");
    app.listen(port, () => {
        console.log(`Server is running on port:${port}`);
    });
}).catch(err => {
    console.error("MongoDB Connection Error:", err.message);
});

app.get("/allHoldings", async(req,res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
})
app.get("/allPositions", async(req,res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1d" });
    res.status(201).json({ message: "User registered successfully", token, username: newUser.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ message: "Login successful", token, username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
