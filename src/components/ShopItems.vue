<template>
    <b-col style="color: black;padding:10px">
        <b-list-group id="item" v-for="item in addDynamicsValue()" :key="item.id">
            
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
        "items"
    ],
    methods:{
        addDynamicsValue: function(){
            let dynamicItems = this.itemsDynamicsValue;
            this.items.forEach( item => {
                dynamicItems.forEach( dynamicItem => {
                    if(item.id === dynamicItem.id){
                        item.price = dynamicItem.price;
                        item.number = dynamicItem.number;
                    }
                })
            });

            return this.items;
        },
        acheterItem: function(id){
            store.dispatch("acheterItemAction",id);
        },
        arrondirValeur(valeur){
            return Math.round(valeur)
        },
    },
    computed:{
        itemsDynamicsValue: function(){
            return store.getters.getItemsDynamicsValue;
        },
        nbMalades: function () {
            return store.getters.getNbMalades;
        }
    },
}
</script>

<style>
    #s-item{
       border-radius: 0px;
       background-color: black;
    }
</style>