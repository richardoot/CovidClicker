import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home";
import Game from "../components/Game";
import Login from "../components/Login";

Vue.use(Router);

export default new Router({
    routes: [
        {path: "/", name: "Home", component: Home},
        {path: "/game", name: "Game", component: Game},
        {path: "/login", name: "Login", component: Login},
    ]
});