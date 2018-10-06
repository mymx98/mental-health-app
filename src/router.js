import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/sleep",
      name: "Sleep",
      component: () => import("./views/Sleep.vue")
    },
    {
      path: "/meditate",
      name: "Meditate",
      component: () => import("./views/Meditate.vue")
    },
    {
      path: "/music",
      name: "Music",
      component: () => import("./views/Music.vue")
    },
    {
      path: "/more",
      name: "More",
      component: () => import("./views/More.vue")
    }
  ]
});
