var stockData = require('../data/stock-data.json');

module.exports.stocksGetAll = function (req, res) {
    console.log('Get all the JSON Data');
    
    res
        .status(200)
        .json(stockData);
};

module.exports.stocksGetOne = function (req, res) {
    var stockSymbol = req.params.symbol;

    console.log('Get a single stock', stockSymbol);

    var thisStock = stockData[stockSymbol];

    var toDateTime = new Date();
    var fromDateTime = new Date();
    fromDateTime.setHours(fromDateTime.getHours() - 24);

    console.log('toDateTime', toDateTime);
    console.log('fromDateTime', fromDateTime);

    res
        .status(200)
        .json(thisStock);
};