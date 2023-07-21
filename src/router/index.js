import { createRouter } from "vue-router";
import routes from "./routes";
import { createWebHistory, createWebHashHistory } from "vue-router";
import { route } from "quasar/wrappers";

import { useQuasar, LocalStorage, Platform } from "quasar";

const createHistory = () => {
  if (Platform.is.electron) {
    return createWebHistory();
  } else {
    return createWebHashHistory();
  }
};

export default route(function () {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(),
  });

  Router.beforeEach((to, from, next) => {
    const loggedIn = LocalStorage.getItem("user-info");

    if (to.path === "/home") {
      // Check if the user is logged in
      if (loggedIn) {
        // User is logged in, allow access to the "/home" page
        next();
      } else {
        // User is not logged in, redirect to login page (or any other page you prefer)
        next("/"); // Replace "/login" with your login page path
      }
    } else {
      // For other pages, just continue to the next page
      next();
    }
  });

  return Router;
});
