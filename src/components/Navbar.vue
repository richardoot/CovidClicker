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
import axios from 'axios';

export default {
    methods:{
        logout: function(){
            console.log("Logout ...");
            this.userData.items = this.items;
            this.userData.powers = this.powers;
            this.userData.date_update = Math.floor(Date.now()/1000);
            axios
            .patch(`http://localhost:3000/user/${this.userData.id}`,this.userData)
            .then(response => {
                console.log(response);
            });
            store.dispatch("logoutAction");
            router.push({name: "Home"});
        },
    },
    computed:{
        loggedIn: function(){
            return store.getters.getloggedIn;
        },
        userData: function(){
            return store.getters.getUserData;
        },
        items: function(){
            return store.getters.getItems;
        },
        powers: function(){
            return store.getters.getPowers;
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

    @media only screen and (max-width:768px){
        #covid-navbar{
            height: 5vh;
            width: 90vw;
        }
    }

    #elements-navbar{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
</style>