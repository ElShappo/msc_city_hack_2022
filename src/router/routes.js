const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/user/:login",
        name: "user",
        component: () => import("pages/UserPage.vue"),
        children: [
          {
            path: "",

            component: () => import("pages/UserPageMain.vue"),
          },
          {
            path: "corrections",

            component: () => import("pages/UserPageCorrections.vue"),
          },
        ],
      },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/signup", component: () => import("pages/SignupPage.vue") },
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
