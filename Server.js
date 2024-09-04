const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const appRouter = require('./routes/appRoutes');

dotenv.config();



mongoose.connect(process.env.APPSTORE_URL).then(() => {
    console.log("Connected to db");
});

const server = express();
server.use(express.json());
server.use(cors());
server.use('/appDetails', appRouter);

server.listen(3500, () => {
    console.log("Server is running");
});
