import HomeView from "./components/HomeView.vue";
import SignUp from "./components/SignUp.vue";
import LoginView from "./components/LoginView.vue";
import AddResto from "./components/AddResto.vue";
import UpdateResto from "./components/UpdateResto.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: HomeView,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/SignUp",
  },
  {
    name: "LoginView",
    component: LoginView,
    path: "/Login",
  },
  {
    name: "AddResto",
    component: AddResto,
    path: "/add",
  },
  {
    name: "UpdateResto",
    component: UpdateResto,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
