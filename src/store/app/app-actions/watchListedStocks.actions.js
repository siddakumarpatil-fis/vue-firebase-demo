import { query, onSnapshot } from "firebase/firestore";
import { listedStocksCollectionRef } from "/src/middleware/bindings";

export default ({ commit }) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
      const documents = [];
      const listedStocksCollection = listedStocksCollectionRef();
      const q = query(listedStocksCollection);
      // eslint-disable-next-line no-unused-vars
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            let id = change.doc.id;
            let { name, type, price, isRecommended } = change.doc.data();
            documents.push({
              name: name,
              type: type,
              price: price,
              isRecommended: isRecommended,
              id: id,
            });
            commit("SET_LISTEDSTOCKS", documents);
          } else if (change.type === "modified") {
            let id = change.doc.data().id;
            let updatedStock = change.doc.data();
            console.log("Stock which got Modified is " + id);
            commit("UPDATE_LISTED_STOCKS", updatedStock);
          } else if (change.type === "removed") {
            let deletedStock = change.doc.data();
            console.log("Stock which got Removed is " + deletedStock.name);

            commit("REMOVE_LISTED_STOCKS", deletedStock);
          }
        });
      });
      // UNCOMMENT TO CLOSE ONSNAPSHOT LISTENER
      //unsubscribe();
      //return true;
      return resolve();
    } catch (e) {
      console.error("Erorr: " + e);
      return reject();
    }
  });
