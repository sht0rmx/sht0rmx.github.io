import { createRouter, createWebHistory } from "vue-router";
import { i18n } from "@/locales";

import Home from "@/views/Home.vue";
import NotFoundView from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { titleKey: "views.home.header" }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
    meta: { titleKey: "views.not_found.header" }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.afterEach((to) => {
  const key = to.meta.titleKey;
  if (key) {
    document.title = i18n.global.t(key);
  }
});

export default router;
