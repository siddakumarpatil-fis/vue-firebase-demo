import Vue from "vue"
import VueRouter from "vue-router"
import AuthMiddleware from "@nerd305/firebase-vuetify-auth/src/components/authguard"
//import { getAuth } from "firebase/auth";
Vue.use(VueRouter)

const routes = [
   {
        name: "HomePage",
        path: "/" || '/home',
        component: () => import("/src/components/HomePage.vue"),
    },
    {
        name: "PortfolioPage",
        path: '/portfolio',
        meta: { requiresAuth: true },
        component: () => import("/src/components/PortfolioPage.vue"),
    },
    {
        name: "StocksPage",
        path: '/stocks',
        meta: { requiresAuth: true },
        component: () => import("/src/components/StocksPage.vue"),
    },
    {
        name: "HelpPage",
        path: '/help',
        component: () => import("/src/components/HelpPage.vue"),
    },
    {
        name: "AboutPage",
        path: '/about',
        component: () => import("/src/components/AboutPage.vue"),
    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("/src/components/LoginPage.vue"),
    },
    {
        name: "SignupPage",
        path: "/signup",
        component: () => import("/src/components/SignupPage.vue"),
    },
    // {
    //     path: "/user",
    //     meta: { requiresAuth: true },
    //     name: "UserPage",
    //     component: () => import("/src/components/UserPage.vue"), 
    // },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach(AuthMiddleware)
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (getAuth().currentUser) {
//       next()
//       return
//     }
//     next('LoginPage')
//   }
//   next()
// })

export default router
