<template>
    <v-card style="margin: 10%;" flat depressed align="center"> <v-card-text>
            <v-img max-height="300" max-width="500" src="../assets/logo.svg" align="center"></v-img>
            <form ref="form" @submit.prevent="signUp" style="margin-top: 20px;">
                <v-text-field v-model="username" name="username" label="Username" type="text" placeholder="Username"
                    required></v-text-field>
                <v-text-field v-model="email" name="email" label="Email ID" type="text" placeholder="Email"
                    required></v-text-field>

                <v-text-field v-model="password" name="password" label="Password" type="password" placeholder="Password"
                    required></v-text-field>

                <div class="red--text"> {{ errorMessage }}</div>
                <v-btn type="submit" class="mt-4" color="primary" value="log in">Sign up</v-btn>
                <router-link to="/login">
                    <div class="green--text">Already have an Account?</div>
                </router-link>

            </form>

        </v-card-text></v-card>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import { getDocs } from "firebase/firestore";
// eslint-disable-next-line no-unused-vars
import {
    portfolioStocksCollectionRef, listedStocksCollectionRef
} from "/src/middleware/bindings";
// eslint-disable-next-line no-unused-vars
import { getFirestore, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import store from '../store/store';
export default {
    name: 'signUp',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        signUp() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password).then(
                (user) => {
                    console.log("Email :" + this.email);
                    const username = this.email;
                    console.log('USER', user);
                    this.createUser(user, user.key,username );
                    this.$router.replace('/')
                },
                (err) => {
                    this.errorMessage = err;
                }
            );
        },
         async createUser(data,key, email) {
            console.log('--------------------------------INSIDE CREATE USER FUN--------------------------------');
            const username = email;
            console.log('email is :', email);
            var stocks=[];
            stocks = await this.getListedStocksinArray();
            addDoc(portfolioStocksCollectionRef(), {
                username: email,
                stocks: stocks
            });
            store.commit('SIGNUP',username);
            // addDoc(portfolioStocksCollectionRef(), {
            //     username: username,
            //     stocks :[]
            // });
        },
        async getListedStocksinArray() {
            const listedStocksCollection = listedStocksCollectionRef();
            let allListedStocks = await getDocs(listedStocksCollection);
            const documents = [];
            console.log("ListedStocks.docs", allListedStocks.docs[0]);
            console.log("allListedStocks.docs", allListedStocks.docs[0]);
            allListedStocks.forEach((listedStock) => {
                let id = listedStock.id;
                let { name, type, price } = listedStock.data();
                let quantity = 0;

                documents.push({ name, type, price, id, quantity });
            });
            console.log('Documents: ' + documents);
            return documents;
        },
    }
}
</script>


       // async adddocForPortfolio(collection, username, sourceCollection){
        //     //const newDocRef= collection.doc(username);
        //     const sourceSnapshot = await sourceCollection.get();
        //     const sourceDocs= sourceSnapshot.doc.map((doc)=> doc.data());
        //     // await newDocRef.set({ username: username, stocks: sourceDocs});
        //     addDoc(collection, {
        //         username: username,
        //         stocks: sourceDocs,
        //     });

        // },
    

<!-- 
<style scoped>
.sign-up {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}

button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}

span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style> -->
