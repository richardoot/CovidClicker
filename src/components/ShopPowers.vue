<template>
    <b-col style="color: black; padding:10px">
        <b-list-group v-for="power in powers2" :key="power.id">
            <b-list-group-item id="s-available" class="s-item" v-if="power.price <= nbMalades && !isPowerActivated(power.id)" button variant="success" v-on:click="acheterPower(power.id)">
                {{power.name}} 
                <b-badge variant="success"> price : {{power.price}} </b-badge>
            </b-list-group-item>
            
            <b-list-group-item id="s-disable" class="s-item" v-else-if="power.price > nbMalades && !isPowerActivated(power.id)" button disabled>
                {{power.name}} 
                <b-badge variant="danger"> price : {{power.price}} </b-badge>
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
    data: function () {
        return{
            powers2: [
                {id: 0, name: "Double Clicker",                 price: 100,       coeff: 2,    item_id: null},
                {id: 1, name: "Double Production Pangolin",     price: 10000,     coeff: 2,    item_id: 0},
                {id: 2, name: "Double Production Cluster",      price: 50000,     coeff: 2,    item_id: 2},
                {id: 3, name: "Double Alcool Fêtes de Bayonne", price: 100000,    coeff: 2,    item_id: 3}
            ] // ensemble des pouvoirs
        }
    },
    methods:{
        acheterPower: function(id){
            let power = this.powers2[id];
            if(this.nbMalades>=power.price){
                store.dispatch("acheterPowerAction",power);
                
                if(power.item_id>=0 && power.item_id !== null){
                    store.dispatch("increaseProductionItemAction",power);
                } else {
                    store.dispatch("increaseProductionClickAction",power.coeff);
                }
            }
        },
        isPowerActivated: function (id) {
            let thePower;
            this.powersActivities.forEach(power => {
                if(power.id === id){
                    thePower = power;
                }
            })
            return thePower.actif;
        },
    },
    computed:{
        nbMalades: function () {
            return store.getters.getNbMalades;
        },
        powersActivities: function () {
            return store.getters.getPowersActivities;
        },
    }
}
</script>