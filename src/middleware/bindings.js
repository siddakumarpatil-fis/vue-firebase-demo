import { getFirestore } from "firebase/firestore"
import app from "@/middleware/firebase"
import { collection, query } from "firebase/firestore"

export const listedStocksCollectionRef = () => {
    return collection(getFirestore(app), "listedStocks")
}

export const portfolioStocksCollectionRef = () => {
    return collection(getFirestore(app), "user-portfolio")
}

export const getCollection = (collectionName) => {
    return collection(getFirestore(app), collectionName)
}

export const getAllDocumentsQuery = (collectionName) => {
    return query(collection(getFirestore(app), collectionName));
}



























// export const setDocForPortfolio = async (newStock, quantity) => {
// console.log('---------Inside SET DOC FOR Portfolio--------');
//     const res = await addDoc(portfolioStocksCollectionRef(), {
//         name: newStock.name,
//         price: newStock.price,
//         type: newStock.type,
//         quantity: quantity
//     })
// console.log('---------EXit SET DOC FOR Portfolio with Resonpse--------',res);
// }
