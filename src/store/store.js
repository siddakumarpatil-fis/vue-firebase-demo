import Vue from "vue"
import Vuex from "vuex"

import state from "@/store/app/app-state"
import actions from "@/store/app/app-actions"
import mutations from "@/store/app/app-mutations"

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
});


  // async syncListedStocks({ commit }) {
  //     const listedStocksCollection = listedStocksCollectionRef();
  //     let allListedStocks = await getDocs(listedStocksCollection);
  //     const documents = [];
  //     console.log("ListedStocks.docs", allListedStocks.docs[0]);
  //     console.log("allListedStocks.docs", allListedStocks.docs[0]);
  //     allListedStocks.forEach((listedStock) => {
  //       let id = listedStock.id;
  //       let { name, type, price, isRecommended } = listedStock.data();

  //       documents.push({ name, type, price, id, isRecommended });
  //     });
  //     commit("SET_LISTEDSTOCKS", documents);
  //     return true;
  //   },