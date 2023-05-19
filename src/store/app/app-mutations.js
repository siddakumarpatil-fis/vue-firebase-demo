import app from "/src/middleware/firebase";
export default {
    REMOVE_LISTED_STOCKS(state, deletedStock) {
      const stock = state.listedStocks.find(
        (el) => el.name === deletedStock.name
      );
      if (stock) {
        console.log("Deleting Stock" + stock.name);
        const stockIndex = state.listedStocks.indexOf(stock);
        state.listedStocks.splice(stockIndex, 1);
      }
      console.log("Exit REMOVE_LISTED_STOCKS");
    },
    UPDATE_LISTED_STOCKS(state, newStock) {
      const stock = state.listedStocks.find((el) => el.name === newStock.name);
      if (stock) {
        stock.id = newStock.id;
        stock.name = newStock.name;
        stock.type = newStock.type;
        stock.price = newStock.price;
        stock.isRecommended = newStock.isRecommended;
      }
    },
    // eslint-disable-next-line no-unused-vars
    SELL_STOCK_PORTFOLIO(state, { stockName, quantity, buyPrice, sellPrice }) {
      const profitAfterSell =
        (parseInt(sellPrice) - parseInt(buyPrice)) * parseInt(quantity);
      state.totalProfits =
        parseInt(state.totalProfits) + parseInt(profitAfterSell);
      const stock = state.portfolio.find((el) => el.name === stockName);
      const remainingQuantity =
        parseInt(stock.ownedQuantity) - parseInt(quantity);
      if (remainingQuantity === 0) {
        const stockIndex = state.portfolio.indexOf(stock);
        state.portfolio.splice(stockIndex, 1);
      } else {
        stock.ownedQuantity = remainingQuantity;
      }
    },
    BUY_STOCK_PORTFOLIO(state, newStock) {
      const stock = state.portfolio.find((el) => el.name === newStock.name);
      if (stock) {
        console.log("Stock matched" + stock.ownedQuantity);
        stock.ownedQuantity =
          parseInt(stock.ownedQuantity) + parseInt(newStock.ownedQuantity);
      } else {
        state.portfolio.push(newStock);
      }
    },
    // PUSH_STOCK_TO_PORTFOLIO(state, newStock) {
    //   var found = false;
    //   state.portfolio.forEach((stock) => {
    //     if (stock.name === newStock.name) {
    //       stock.quantity =
    //         parseInt(stock.quantity) + parseInt(newStock.quantity);
    //       found = true;
    //     }
    //   });
    //   if (!found) {
    //     state.portfolio.push(newStock);
    //     found = false;
    //   }
    // },
    LOGOUT(state) {
      app.auth().signOut();
      state.user = null;
      state.isLoggedIn = false;
      state.username = null;
      state.portfolio = [];
      console.log("-----------------------------------------");
      console.log("Logged OUT Successfully " + state.user + " ");
    },
    // eslint-disable-next-line no-unused-vars
    ISLOGGEDIN(state) {
      let loggedIn = app.auth().currentUser;
      if (loggedIn) {
        console.log("User Logged In with Email: " + loggedIn.email);
        state.username = loggedIn.email;
        state.loggedIn = true;
      } else {
        console.log("User Not Logged In ");
        state.username = null;
        state.loggedIn = false;
      }
    },
    SET_USERNAME(state, username) {
      state.username = username;
      console.log("Logged In Successfully " + username);
      console.log("Logged In Successfully " + state.username);
    },
    UPDATE_FUNDS(state, stock) {
      state.funds =
        parseInt(state.funds) -
        parseInt(stock.price) * parseInt(stock.quantity);
      console.log("Funds" + state.funds);
    },

    SIGNIN(state, key) {
      state.user.accessKey = key;
      state.isLoggedIn = true;
      state.username = "";
      // state.username= username;
      // console.log("Logged In Successfully "+username);
      // console.log("Logged In Successfully "+state.username);
      console.log("Logged In Successfully " + state.isLoggedIn);
    },
    SET_LISTEDSTOCKS(state, listedStocks) {
      state.listedStocks = listedStocks;
    },
    SIGNUP(state, username) {
      //state.user.accessKey = key;
      state.username = username;
      state.isLoggedIn = true;
      state.username = username;
      console.log("Signed Up Successfully " + state.username);
    },
    SET_PORTFOLIO(state, portfolio) {
      state.portfolio = portfolio;
      //state.username= username;
    }
};
