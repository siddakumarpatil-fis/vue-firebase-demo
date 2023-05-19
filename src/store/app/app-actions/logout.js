export default ({ commit }) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
      commit("LOGOUT");
      return { success: true }, resolve();
    } catch (e) {
      console.error("Erorr: " + e);
      return reject();
    }
  });
