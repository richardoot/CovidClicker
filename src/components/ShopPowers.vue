<template>
    <b-col style="color: black; padding:10px">
        <b-list-group v-for="power in powers" :key="power.id">
            <b-list-group-item id="s-available" class="s-item" v-if="power.price <= nbMalades && !power.actif" button variant="success" v-on:click="acheterPower(power.id)">
                {{power.name}} 
                <b-badge variant="success"> price : {{power.price}} </b-badge>
            </b-list-group-item>
            
            <b-list-group-item id="s-disable" class="s-item" v-else-if="power.price > nbMalades && !power.actif" button disabled>
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
            powers: [
                {id: 0, name: "Double Clicker",                 price: 100,       coeff: 2,    item_id: null,   actif: false   },
                {id: 1, name: "Double Production Pangolin",     price: 10000,     coeff: 2,    item_id: 0,      actif: false   },
                {id: 2, name: "Double Production Cluster",      price: 50000,     coeff: 2,    item_id: 2,      actif: false   },
                {id: 3, name: "Double Alcool Fêtes de Bayonne", price: 100000,    coeff: 2,    item_id: 3,      actif: false   }
            ] // ensemble des pouvoirs
        }
    },
    methods:{
        acheterPower: function(id){
            let power = this.getPowerById(id);
            if(this.nbMalades>=power.price){
                store.dispatch("removeMaladesAction",power.price);
                power.actif = true;

                if(power.item_id>=0 && power.item_id !== null){
                    store.dispatch("increaseProductionItemAction",power);
                } else {
                    store.dispatch("increaseProductionClickAction",power.coeff);
                }
            }
        },
        getPowerById(id){
            let power;
            this.powers.forEach( current_power => {
                if(current_power.id === id){
                    power = current_power;
                }
            });
            return power;
        },
        // isPowerActivated: function (id) {
        //     let thePower;
        //     this.powersActivities.forEach(power => {
        //         if(power.id === id){
        //             thePower = power;
        //         }
        //     })
        //     return thePower.actif;
        // },
    },
    computed:{
        nbMalades: function () {
            return store.getters.getNbMalades;
        },
        // powersActivities: function () {
        //     return store.getters.getPowersActivities;
        // },
    }
}
</script>