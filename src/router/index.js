import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",

    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/apartment/:id",
    name: "apartment",

    component: () => import("../views/ApartmentView.vue"),
  },
  {
    path: "/orders",
    name: "orders",

    component: () => import("../views/MyOrdersView.vue"),

    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",

    component: () => import("../views/LoginView.vue"),
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("../views/RegistrationView.vue"),
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "*",
    name: "not-found",

    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login" });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "home" });
    }
  }

  next();
});

export default router;
