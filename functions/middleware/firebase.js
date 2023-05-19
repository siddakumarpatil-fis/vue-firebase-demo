const firebase = require("firebase-admin");
const {FieldValue} = require("firebase-admin/firestore");

firebase.initializeApp();
module.exports = {FieldValue, firebase};

