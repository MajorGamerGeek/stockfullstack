const api = "http://localhost:3001/api"

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'stocksapi'
}

export const getAllStocks = () =>
  fetch(`${api}/stocks`, { headers });

export const getStock = (stockSymbol) =>
  fetch(`${api}/stocks/${stockSymbol}`, { headers });