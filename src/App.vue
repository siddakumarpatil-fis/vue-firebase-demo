
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components:{
    NavBar
  }
};
</script>

<template>
  <v-app class="red lighten-2">
    <NavBar></NavBar>

    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
      
    </v-main>
    <AuthenticationGuard />
  </v-app>
</template>