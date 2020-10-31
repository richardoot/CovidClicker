<template>
    <b-col style="color: black; background-color: grey; padding:10px">
        <b-list-group v-for="power in powers" :key="power.id">
            <b-list-group-item v-if="power.price <= nbMalades && !power.actif" button variant="success" v-on:click="acheterPower(power.id)">
                {{power.name}} 
                <b-badge variant="success"> price : {{power.price}} </b-badge>
            </b-list-group-item>
            
            <b-list-group-item v-else-if="power.price > nbMalades && !power.actif" button disabled>
                {{power.name}} 
                <b-badge variant="danger"> price : {{power.price}} </b-badge>
            </b-list-group-item>
        </b-list-group>
    </b-col>
</template>


<script>
import store from '../store/store';
export default {
    methods:{
        acheterPower: function(id){
            store.dispatch("acheterPowerAction",id);
        },
    },
    computed:{
        powers: function () {
            return store.getters.getPowers;
        },
        nbMalades: function () {
            return store.getters.getNbMalades;
        }
    }
}
</script>