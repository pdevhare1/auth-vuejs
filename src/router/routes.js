const routes = [
  {
    path: "/",
    component: () => import("../pages/AuthPage.vue"),
  },
  {
    path: "/signup",
    component: () => import("../pages/SignUp.vue"),
  },
  {
    path: "/home",
    component: () => import("../pages/HomePage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];



export default routes;
