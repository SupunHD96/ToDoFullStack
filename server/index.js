const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/users");
const taskModel = require("./models/tasks");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://StandardUser:StandardUser@testcluster.hio72.mongodb.net/todolist?retryWrites=true&w=majority", {
});

app.get("/getUsers", (req, res) => {
    userModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

app.get("/getTasks", (req, res) => {
    taskModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await userModel.findOne({
            username, password
        });
        
        if (!user) {
            return res.status(400).json({
                message: "user doesn't exist",
                logged: false,
            });
        } else {
            return res.status(200).json({
                message: "login successful",
                logged: true,
            });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "server error"
        });
    }
});
    

app.listen(3002, () => {
    console.log("Server running on port 3002...");
});