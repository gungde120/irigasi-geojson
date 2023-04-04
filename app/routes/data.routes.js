const DataController = require('../controllers/data.controller.js');

module.exports = app => {

    var router = require("express").Router();

    router.get('/', DataController.getJsonData);

    app.use('/api/geojson', router);
};