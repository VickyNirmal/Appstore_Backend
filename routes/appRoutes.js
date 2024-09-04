const express = require('express');
const { getAppData } = require('../controllers/AppController');

const appRouter = express.Router();

appRouter.get('/',getAppData);

module.exports = appRouter;