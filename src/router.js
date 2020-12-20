import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        // Posts
        {
            path: "/home",
            name: "home",
            component: () => import("./pages/Posts/Show.vue"),
        },
        {
            path: "/create",
            name: "home",
            component: () => import("./pages/Restaurants/Index"),
        }
        
    ],
});