import User from "layouts/UserLayout";
import Main from "pages/UserPageMain";
import Corrections from "pages/UserPageCorrections";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/signup", component: () => import("pages/SignupPage.vue") },
    ],
  },
  {
    path: "/user/:login",
    name: "user",
    component: User,
    children: [
      {
        path: "",
        component: Main,
      },
      {
        path: "corrections",
        component: Corrections,
      },
      { path: "analogues", component: () => import("pages/AnaloguesPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
