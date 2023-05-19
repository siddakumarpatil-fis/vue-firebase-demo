export default ({ commit }) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise( async (resolve, reject) => {
    try {
      console.log("ISLOGGEDIN Started ");
      commit("ISLOGGEDIN");
      console.log("ISLOGGEDIN Exited ");
      return resolve();
    } catch (e) {
      console.error("Erorr: " + e);
      return reject();
    }
  });
