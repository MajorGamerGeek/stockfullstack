var express = require('express');
var ctrlStocks = require('../controllers/stocks.controllers');
var router = express.Router();

router
    .route('/api/stocks')
    .get(ctrlStocks.stocksGetAll);

router
    .route('/api/stocks/:symbol')
    .get(ctrlStocks.stocksGetOne);

module.exports = router;