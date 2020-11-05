import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        production_click: 1000,
        production_per_sec:0,
        nb_malades:0, //nombre de malades
        userData:{
            items:[
                {id: 0, number: 0, coeffPrice: 0.25, production: 0.5 },
                {id: 1, number: 0, coeffPrice: 0.25, production: 3   },
                {id: 2, number: 0, coeffPrice: 0.25, production: 6   },
                {id: 3, number: 0, coeffPrice: 0.25, production: 12  },
            ],
            powers:[
                {id: 0, actif: false },
                {id: 1, actif: false },
                {id: 2, actif: false },
                {id: 3, actif: false },
            ]
        },
        items: [
            {id: 0, name: "Pangolin",           price: 10,      number: 0,  coeffPrice: 0.25,    production: 0.5,    image:"pangolin-item.png"},
            {id: 1, name: "Test défaillant",    price: 100,     number: 0,  coeffPrice: 0.25,    production: 3,      image:"test-tube.png"},
            {id: 2, name: "Cluster",            price: 500,     number: 0,  coeffPrice: 0.25,    production: 6,      image:"cluster.png"},
            {id: 3, name: "Fêtes de Bayonne",   price: 1000,    number: 0,  coeffPrice: 0.25,    production: 12,     image:"party.png"}
        ], // ensemble des items
    },
    mutations: {
        addMalade(state){
            state.nb_malades+=state.production_click;
        },
        removeMalades(state, price){
            state.nb_malades -= price;
        },
        addMaladeAuto(state){
            state.nb_malades+=(state.production_per_sec/10);
        },
        activePower(state, id){
            state.userData.powers.forEach( power => {
                if(power.id === id){
                    console.log("The id is : " + power.id + " and the bool is : " + power.actif);
                    power.actif = true;
                    console.log("And now the bool is : " + power.actif);
                }
            })
        },
        increaseProductionClick(state, coeff){
            state.production_click*=coeff;
        },




        //A modifier
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
    },
    actions: {
        addMaladeAction: function(context){
            console.log("Incrément du nombre de malades");
            context.commit('addMalade');
        },
        removeMaladesAction: function(context, price){
            console.log("Vous avez payé la somme de : " + price + " malades");
            context.commit('removeMalades', price);
        },
        activePowerAction: function (context, id) {
            console.log("Vous avez activé le pouvoir avec l'id : "+id);
            context.commit("activePower",id);
        },
        increaseProductionClickAction: function(context, coeff){
            context.commit("increaseProductionClick",coeff);
        },



        // A Modifier
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
        },
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
        },
        getPowersActivities: function(state){
            return state.userData.powers;
        },
    }
});
