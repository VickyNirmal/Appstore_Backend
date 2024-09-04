const mongoose  = require("mongoose");

const appSchema = new mongoose.Schema({
    name : String,
    url : String,
    category : String
},{collection:"appdetail"})

const appModel = mongoose.model('',appSchema);

module.exports = appModel;