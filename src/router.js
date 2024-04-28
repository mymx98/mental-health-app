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
      path: "/intro",
      name: "Intro",
      component: () => import("./views/Intro.vue")
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
      redirect: "/more/navigation",
      component: () => import("./views/More.vue"),
      children: [
        {
          path: "navigation",
          name: "MoreNavigation",
          component: () => import("./views/MoreNavigation.vue")
        },
        {
          path: "breathe",
          name: "Breathe",
          component: () => import("./views/Breathe.vue")
        },
        {
          path: "scene",
          name: "Scene",
          component: () => import("./views/Scene.vue")
        },
        {
          path: "profile",
          name: "Profile",
          component: () => import("./views/Profile.vue")
        }
      ]
    }
  ]
});
