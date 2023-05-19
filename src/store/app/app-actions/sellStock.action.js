export default ({ commit }, stock) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
      console.log("------------Start  sellStockInPortfolio------------");
      console.log("Stock that is being Sold is " + stock);
      if (typeof stock.quantity === "undefined") {
        stock.quantity = 0;
      }
      let stockName = stock.name;
      let buyPrice = stock.price;
      let sellPrice = stock.currentPrice;
      let quantity = stock.quantity;
      commit("SELL_STOCK_PORTFOLIO", {
        stockName,
        quantity,
        buyPrice,
        sellPrice,
      });
      console.log("------------EXIT sellStockInPortfolio------------");
      return resolve();
    } catch (e) {
      console.error("Erorr: " + e);
      return reject();
    }
  });
