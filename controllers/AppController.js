const appModel = require("../models/AppModel");

exports.getAppData = async (req, res) => {
    try {
      const queryObj = {...req.query};
      const appData = await appModel.find(queryObj);
      res.status(200).json(appData);
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };