<template>
<b-row align-h="center">
        <Clicker 
          v-on:addMalade="addMalade"
          v-bind:nbMalades="nbMalades"
        />
        <Shop/>
        <Units/>
    </b-row>
</template>

<script>
import store from "../store/store";
import Clicker from "./Clicker";
import Units from './Units';
import Shop from './Shop';

export default {
    components: {
        Clicker,
        Units,
        Shop
    },
    methods:{
        addMalade: function(){
        store.dispatch("addMaladeAction");
        },
    },
    computed:{
        nbMalades: function(){
        return store.getters.getNbMalades;
        },
    },

}
</script>