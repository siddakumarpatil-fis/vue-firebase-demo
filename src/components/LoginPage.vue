<template>
    <v-card style="margin: 10%;" flat depressed align="center"> <v-card-text>
        <v-img
  max-height="300"
  max-width="500"
  src="../assets/logo.svg" align="center"
></v-img>
            <form ref="form" @submit.prevent="UserLogin" style="margin-top: 20px;">
                <v-text-field v-model="email" name="email" label="Email ID" type="text" placeholder="Email"
                    required></v-text-field>

                <v-text-field v-model="password" name="password" label="Password" type="password" placeholder="Password"
                    required></v-text-field>
                    
                <div class="red--text"> {{ errorMessage }}</div>
                <v-btn type="submit" class="mt-4" color="primary" value="log in">Log In</v-btn>
                <router-link to="/signup"> <div class="green--text"> Create a new account</div> </router-link>
            </form>
        </v-card-text></v-card>
</template>
<script>
import {mapActions} from "vuex";
export default {
    data() {
        return {
            email: "",
            password: "",
            errorMessage:""
        }
    },
    methods: {
        ...mapActions(['login']),
        async UserLogin() {
            console.log('----------UserLogin Function Triggered-------------');
            const res = await this.login({email: this.email, password: this.password});
            console.log('UserLogin Function Triggered');
            if (res.success) {
                this.$router.replace('stocks')
            }
            else {
                this.errorMessage= res.err;
            }
            console.log('----------Exited Login Function---------------')
        }
    }
};
</script>


