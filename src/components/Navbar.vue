<template>
    <b-navbar id="covid-navbar" type="dark">
    <b-navbar-nav id="elements-navbar">
        <b-nav-item href="/#/">Home</b-nav-item>
        <b-nav-item href="/#/game">Play</b-nav-item>
        <b-nav-item href="/#/login">Login</b-nav-item>
    </b-navbar-nav>
    </b-navbar>
</template>

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