export default ({ commit }, stock) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise( async (resolve, reject) => {
    try {
      console.log("------------Inside  addNewStockInPortfolio------------");
      if (typeof stock.quantity === "undefined") {
        stock.quantity = 1;
      }
      const newStock = {
        name: stock.name,
        price: stock.price,
        type: stock.type,
        ownedQuantity: stock.quantity,
        currentPrice: Math.round(Math.random() * 1000),
      };
      console.log(" New Stock in Port");
      console.log(newStock);
      commit("BUY_STOCK_PORTFOLIO", newStock);
      commit("UPDATE_FUNDS", stock);
      console.log("------------EXIT  addNewStockInPortfolio------------");
      return resolve();
    } catch (e) {
      console.error("Erorr: " + e);
      return reject();
    }
  });
