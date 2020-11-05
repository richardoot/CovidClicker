<template>
    <b-col style="color: black; padding:10px">
        <b-list-group v-for="power in powers2" :key="power.id">
            <b-list-group-item v-if="power.price <= nbMalades && !isPowerActivated(power.id)" button variant="success" v-on:click="acheterPower(power.id)">
                {{power.name}} 
                <b-badge variant="success"> price : {{power.price}} </b-badge>
            </b-list-group-item>
            
            <b-list-group-item v-else-if="power.price > nbMalades && !isPowerActivated(power.id)" button disabled>
                {{power.name}} 
                <b-badge variant="danger"> price : {{power.price}} </b-badge>
            </b-list-group-item>
        </b-list-group>
    </b-col>
</template>


<script>
import store from '../store/store';
export default {
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
        activePower: function (id) {
            store.dispatch("activePowerAction",id);
        },
        removeMalades: function (price) {
            store.dispatch("removeMaladesAction",price);
        },
        increaseProductionClick: function (coeff) {
            store.dispatch("increaseProductionClickAction",coeff);
        },
        acheterPower: function(id){
            let power = this.powers2[id];
            if(this.nbMalades>=power.price){
                this.removeMalades(power.price) // Déduction du prix
                this.activePower(power.id); 

                
                if(power.item_id>=0 && power.item_id !== null){
                    // console.log("L'item doublé par le pouvoir est : " + state.items[power.item_id].name + " son id est : " + power.item_id);
                    // let item = state.items[power.item_id];
                    // item.production*=power.coeff;
                } else {
                    this.increaseProductionClick(power.coeff);
                }
            }
        },
        isPowerActivated: function (id) {
            let i = 0;
            let thePower;
            this.powersActivities.forEach(power => {
                if(power.id === id){
                    console.log(i +" On the print the bool is : " + power.actif );
                    thePower = power;
                }
                i++;
            })
            return thePower.actif;
        }
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