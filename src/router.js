import Vue from "vue";
import Router from "vue-router";
import CV from "@/views/CV";
import HomePage from "@/views/HomePage";
import Impressum from "@/views/Impressum";
import Privacy from "@/views/Privacy";
import PageNotFound from "@/views/PageNotFound";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/cv",
      component: CV
    },
    {
      path: "/impressum",
      component: Impressum
    },
    {
      path: "/privacy",
      component: Privacy
    }
  ],
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: "smooth" });
      }, 1000);
    });
  }
});
export default router;
