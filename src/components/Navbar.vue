<template>
    <b-navbar id="covid-navbar" type="dark">
    <b-navbar-nav id="elements-navbar">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item v-if="loggedIn" to="/game">Play</b-nav-item>
        <b-nav-item v-else disabled>Play</b-nav-item>
        <template v-if="!loggedIn">
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/subscribe">Subscribe</b-nav-item>
        </template>
        <b-nav-item v-else v-on:click="logout">Déconnexion</b-nav-item>
    </b-navbar-nav>
    </b-navbar>
</template>

<script>
import store from "../store/store";
import router from "../router/router";

export default {
    methods:{
        logout: function(){
            console.log("Logout ...");
            store.dispatch("logoutAction");
            router.push({name: "Home"});
        },
    },
    computed:{
        loggedIn: function(){
            return store.getters.getloggedIn;
        }
    },
}
</script>

<style>
    #covid-navbar{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 0px;
        background-color: rgba(91,84,84, 0.5);
        font-size: 25px;
        border-radius: 30px;
        
        height: 5vh;
        width: 41vw;
    }

    #elements-navbar{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
</style>