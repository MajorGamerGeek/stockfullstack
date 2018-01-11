import * as API from '../utils/Api';

export const GET_ALL_STOCKS = 'GET_ALL_STOCKS';
export const GET_STOCK = 'GET_STOCK';

export function getAllStocks(stocks) {
	return {
		type: GET_ALL_STOCKS,
		stocks
	}
};

export function getStock(stocks) {
	return {
		type: GET_STOCK,
		stocks
	}
};

export function fetchAllStocks() {
	return function (dispatch) {
		API.getAllStocks()
			.then((response) => response.json())
			.then((stocks) => dispatch(getAllStocks(stocks)));
	}
};

export function fetchStock(stockSymbol) {
	return function (dispatch) {
		API.getStock(stockSymbol)
			.then((response) => response.json())
			.then((stock) => dispatch(getStock(stock)));
	}
};
