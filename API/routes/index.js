var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('<html><head><title>API - TCC</title></head><body><h1>API - TCC</br>Express Server - Running</h1></body></html>');
});

module.exports = router;
