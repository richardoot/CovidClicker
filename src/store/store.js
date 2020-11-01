import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        production_click: 5000,
        production_per_sec:0,
        nb_malades:0, //nombre de malades
        items: [
            {id: 0, name: "Pangolin",           price: 10,      number: 18,  coeffPrice: 0.25,    production: 0.5,    image:"pangolin-item.png"},
            {id: 1, name: "Test défaillants",   price: 100,     number: 18,  coeffPrice: 0.25,    production: 3,      image:"test-tube.png"},
            {id: 2, name: "Cluster",            price: 500,     number: 18,  coeffPrice: 0.25,    production: 6,      image:"cluster.png"},
            {id: 3, name: "Fêtes de Bayonne",   price: 1000,    number: 18,  coeffPrice: 0.25,    production: 12,     image:"party.png"}
        ], // ensemble des items
        powers: [
            {id: 0, name: "Double Clicker",                 price: 100,       actif: false,    coeff: 2,    item_id: null},
            {id: 1, name: "Double Production Pangolin",     price: 10000,     actif: false,    coeff: 2,    item_id: 0},
            {id: 2, name: "Double Production Cluster",      price: 50000,     actif: false,    coeff: 2,    item_id: 2},
            {id: 3, name: "Double Alcool Fêtre de Bayonne", price: 100000,    actif: false,    coeff: 2,    item_id: 3}
        ] // ensemble des pouvoirs
    },
    mutations: {
        acheterPower(state,id){
            let power = state.powers[id];
            if(state.nb_malades>=power.price){
                state.nb_malades -= power.price; // Déduction du prix
                power.actif = true;

                
                if(power.item_id>=0 && power.item_id !== null){
                    console.log("L'item doublé par le pouvoir est : " + state.items[power.item_id].name + " son id est : " + power.item_id);
                    let item = state.items[power.item_id];
                    item.production*=power.coeff;
                } else {
                    state.production_click*=2;
                }
            }
        },
        updateItem(state,id){
            let coeff_regression = 0.99;
            let item = state.items[id]; 
            if(state.nb_malades >= item.price){
                state.nb_malades -= item.price; //Déduit le prix
                item.number++; //Incrémente le nombre
                item.price*=(1+item.coeffPrice);
                item.coeffPrice*=coeff_regression; //Augmenter l'inflation du prix
            }
            // console.log("Vous avez: " + state.items[id].number + " " + state.items[id].name + "s");
        },
        updateProductionPerSec(state){
            let somme = 0;
            state.items.forEach(item => {
                somme += item.number*item.production;
            });

            state.production_per_sec = somme;
        },
        addMalade(state){
            state.nb_malades+=state.production_click;
        },
        addMaladeAuto(state){
            state.nb_malades+=(state.production_per_sec/10);
        }
    },
    actions: {
        addMaladeAction: function(context){
            console.log("Incrément du nombre de malades");
            context.commit('addMalade');
        },
        acheterPowerAction: function(context,id){
            console.log("Vous avez acheté un Power avec l'id : " + id);
            context.commit("acheterPower",id);
            context.commit("updateProductionPerSec");
        },
        acheterItemAction: function(context,id){
            console.log("Achat d'Item");
            context.commit('updateItem',id);
            context.commit('updateProductionPerSec');
        },
        addMaladeAutoAction: function(context){
            context.commit('addMaladeAuto');
        }
    },
    getters: {
        getNbMalades: function (state) {
            return state.nb_malades;
        },
        getItems: function (state){
            return state.items;
        },
        getProductionClick: function (state) {
            return state.production_click;
        },
        getProductionPerSec: function (state) {
            return state.production_per_sec;
        },
        getPowers: function(state){
            return state.powers;
        }
    }
});
