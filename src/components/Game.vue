<template>
<b-row align-h="center">
        <Clicker 
          v-on:addMalade="addMalade"
          v-bind:nbMalades="nbMalades"
        />
        <Shop
          v-bind:items="items"
        />
        <Units
          v-bind:items="items"
        />
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
    data: function(){
        return {
            items: [
                {id: 0,     name: "Pangolin",             image:"pangolin-item.png"   },
                {id: 1,     name: "Test défaillant",      image:"test-tube.png"       },
                {id: 2,     name: "Cluster",              image:"cluster.png"         },
                {id: 3,     name: "Fêtes de Bayonne",     image:"party.png"           }
            ],
        }
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