import { createRouter, createWebHistory} from "vue-router"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Register from "../Register.vue"
import Login from "../Login.vue"
import About from "../views/About.vue"
import firebase from "firebase"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:symbol",
    name: "Abou"',
    component: About,
    props:true,
  },
  {
    path: "/register",
    name: "register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
];





const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL_,
  routes,
});

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})



export default router;
