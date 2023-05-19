import {
  portfolioStocksCollectionRef,
} from "/src/middleware/bindings";
import { getDocs } from "firebase/firestore";

    // eslint-disable-next-line no-unused-vars
export default ({commit },username) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
        console.log("----------------START SYNCPORTFOLIO------------------");
      let documents = [];
      const portfolioStocksCollection = portfolioStocksCollectionRef();
      let portfolioStocks = await getDocs(portfolioStocksCollection);
      console.log("username in Arguments is :" + username);
      portfolioStocks.forEach((el) => {
        console.log("From Firestore el-username is :" + el.data().username);
        if (el.data().username === username) {
          let stocks = el.data().stocks;
          documents = stocks;
        }
      });
      console.log("documents: " + documents);
      console.log("UNCOMMENT BELOW COMMIT TO GET PORTFOLIO FROM FIRESTORE (AS OF NOW COMMENTED)" );
      //commit("SET_PORTFOLIO", documents);
      console.log("----------------EXIT SYNCPORTFOLIO------------------");
      //return true;
      return resolve()
    } catch (e) {
      console.error('Erorr: '+e);
      return reject()
    }
  })