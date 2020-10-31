<template>
    <b-col style="color: black; background-color: grey;padding:10px">
        <b-list-group id="item" v-for="item in items" :key="item.id">
            
            <b-list-group-item v-if="item.price <= nbMalades" button variant="success" v-on:click="acheterItem(item.id)">
                {{item.name}}: {{arrondirValeur(item.number)}}
                <b-badge variant="success" pill>price : {{arrondirValeur(item.price)}}</b-badge>
            </b-list-group-item>

            <b-list-group-item v-else button disabled v-on:click="acheterItem(item.id)">
                {{item.name}}: {{arrondirValeur(item.number)}}
                <b-badge variant="danger" pill>price : {{arrondirValeur(item.price)}}</b-badge>
            </b-list-group-item>

        </b-list-group>
    </b-col>
</template>

<script>
import store from '../store/store';

export default {
    props:[
        
    ],
    methods:{
        acheterItem: function(id){
            store.dispatch("acheterItemAction",id);
        },
        arrondirValeur(valeur){
            return Math.round(valeur)
        }
    },
    computed:{
        items: function(){
            return store.getters.getItems;
        },
        nbMalades: function () {
            return store.getters.getNbMalades;
        }
    }
}
</script>

<style>
    #s-item{
       border-radius: 0px;
       background-color: black;
    }
</style>