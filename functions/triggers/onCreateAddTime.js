const {logger, ref} = require("../middleware");

module.exports = (snap, context) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
      logger.log("Inside onCreateAddTime Function");
      await snap.ref.set(
          {
            created_at: ref.FieldValue.serverTimestamp(),
            updated_at: ref.FieldValue.serverTimestamp(),
          },
          {merge: true},
      );
      logger.log("Added fields created_at & updated_at ");
      logger.log("Exit onCreateAddTime Function");
      return resolve();
    } catch (e) {
      logger.error("Error at onCreateAddTime: ", e);
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject();
    }
  });
