import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default ({ commit }, loginData) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise( async (resolve, reject) => {
    try {
          const auth = getAuth();
        const response = await signInWithEmailAndPassword(
          auth,
          loginData.email,
          loginData.password
        );
        commit("SIGNIN", response._tokenResponse.idToken, loginData.email);
        commit("SET_USERNAME", loginData.email);
        return { success: true },resolve();
    } catch (e) {
      console.error("Erorr: " + e);
      return reject();
    }
  });
