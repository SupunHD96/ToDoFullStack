const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    incharge: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
});

const taskModel = mongoose.model("todos", taskSchema)
module.exports = taskModel;
