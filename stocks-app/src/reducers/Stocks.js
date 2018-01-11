import { GET_ALL_STOCKS, GET_STOCK } from '../actions/Stocks';

function stocks(state = { stocks: [] }, action) {
  
	switch (action.type) {
  case GET_ALL_STOCKS:
    return {
      ...state,
      stocks: stocks
    };
		case GET_STOCK:
			return {
				...state,
				stocks: stocks
			};
		default:
			return state;
	}
}

export default stocks;