<template>
    <b-col style="color: black;padding:10px">
        <b-list-group id="item" v-for="item in items" :key="item.id">
            
            <b-list-group-item id="s-available" class="s-item" v-if="item.price <= nbMalades" button variant="success" v-on:click="acheterItem(item.id)">
                {{item.name}}: {{arrondirValeur(item.number)}}
                <b-badge variant="success" pill>price : {{arrondirValeur(item.price)}}</b-badge>
            </b-list-group-item>

            <b-list-group-item id="s-disable" class="s-item" v-else button disabled v-on:click="acheterItem(item.id)">
                {{item.name}}: {{arrondirValeur(item.number)}}
                <b-badge variant="danger" pill>price : {{arrondirValeur(item.price)}}</b-badge>
            </b-list-group-item>

        </b-list-group>
    </b-col>
</template>

<script>
import store from '../store/store';

export default {
    methods:{
        addDynamicsValue: function(){
            let dynamicItems = store.getters.getItemsDynamicsValue;
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
        nbMalades: function () {
            return store.getters.getNbMalades;
        },
        items: function(){
            return store.getters.getItems;
        }
    },
}
</script>
