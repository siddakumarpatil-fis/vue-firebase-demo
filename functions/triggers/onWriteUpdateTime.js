/* eslint-disable max-len */
const {logger, ref} = require("../middleware");
module.exports = (change, context) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
      if (!change.after.exists) {
        logger.log("The document is deleted");
        return resolve();
      }
      if (!change.before.data() && change.after.data()) {
        logger.log("onWrite Was Triggered on the document being created First Time");
        return resolve();
      }

      if ((change.after.data().updated_at).isEqual( change.before.data().updated_at ) ) {
        logger.log("onWrite was triggered because change in doc");
        await change.after.ref.set({updated_at: ref.FieldValue.serverTimestamp()}, {merge: true});
        return resolve();
      }
      return resolve();
      // if (!previousDocData.updatedByFunction) {
      //   logger.log("OnWrite was triggered because of changes in the Doc");
      //   await documentRef.set({
      //     updated_at: ref.FieldValue.serverTimestamp(),
      //     updatedByFunction: true,
      //   }, {merge: true});
      //   logger.log("Updated field updated_at");

      //   // Remove the flag indicating the update was made by the function
      //   setTimeout(() => {
      //     documentRef.update({
      //       updatedByFunction: ref.FieldValue.delete(),
      //     });
      //   }, 4000);
      //   logger.info("Removed Flag");
      //   return resolve();
      // }
    } catch (e) {
      logger.error("OnWriteUpdateTime error: " + e);
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject();
    }
  });


// if (documentData.updated_at === previousDocData.updated_at ) {
//   logger.log("OnWrite was triggered because of changes in the Doc");
//   await documentRef.set(
//       {
//         updated_at: ref.FieldValue.serverTimestamp(),
//       },
//       {merge: true});
//   return resolve();
// }
