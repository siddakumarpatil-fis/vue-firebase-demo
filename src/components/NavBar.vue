<template>
    <nav>
        <v-toolbar class="grey white--text">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item black--text">
                    <img class=""
                        src=" https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/logo-dark-groww.svg"
                        width="148" height="40" alt="Groww Logo">
                </router-link>
            </div>
            <v-toolbar-items align="center" v-for="tab in tabs" v-bind:key="tab.id">
                <v-btn right depressed flat color="grey" v-on:click="$router.push(tab.route)">
                    {{ tab.text }}
                </v-btn>
            </v-toolbar-items>
            <v-spacer> </v-spacer>
            <v-toolbar-items align="center">
                <v-btn v-if="loggedIn" right depressed flat color="grey">
                    Hi {{ username.split('@')[0] }}
                </v-btn>
            </v-toolbar-items>
            <div v-if="!loggedIn">
                <v-btn right depressed flat color="grey" v-on:click="$router.push('/login')">
                    <span>
                        Sign In
                    </span>
                    <v-icon right>mdi-exit-to-app</v-icon>
                </v-btn>
            </div>
            <div v-else>
                <v-btn right depressed flat color="grey" v-on:click="UserLogout">
                    <span>
                        Sign Out
                    </span>
                </v-btn>
            </div>
        </v-toolbar>
    </nav>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
    name: 'NavBar',
    data() {
        return {
            drawer: false,
            tabs: [
                { id: 0, text: 'Portfolio', route: '/portfolio' },
                { id: 1, text: '$-Stocks', route: '/stocks' },
                { id: 2, text: 'Help', route: 'help' },
                { id: 3, text: 'About', route: 'about' },
            ]
        }
    },
    created() {
        this.isLoggedIn();
    },
    methods: {
        ...mapActions(['logout', 'isLoggedIn']),
        async UserLogout() {
            console.log("Username:" + this.$store.state.username);
            console.log('User LOGOUT Function Triggered');
            const res = await this.logout();
            if (res.success) {
                console.log('---------------------User LOGOUT------------');
                this.$router.replace('/')
            } else alert(res.err);
            console.log('Exited LOGOUT Function')
        }
    },
    computed: {
        ...mapState({
            loggedIn: 'loggedIn',
            username: 'username',
            funds: 'funds'
        })
    }
}
</script>
