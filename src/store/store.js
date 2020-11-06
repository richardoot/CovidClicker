import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userData:{
            nb_malades:0, //nombre de malades
            production_click: 1000000,
            production_per_sec:0,
            items:[
                {id: 0,   price: 10,    number: 0,  coeffPrice: 0.25,  production: 0.5  },
                {id: 1,   price: 100,   number: 0,  coeffPrice: 0.25,  production: 3    },
                {id: 2,   price: 500,   number: 0,  coeffPrice: 0.25,  production: 6    },
                {id: 3,   price: 1000,  number: 0,  coeffPrice: 0.25,  production: 12   },
            ],
            powers:[
                {id: 0,   actif: false   },
                {id: 1,   actif: false   },
                {id: 2,   actif: false   },
                {id: 3,   actif: false   },
            ]
        },
    },
    mutations: {
        addMalade(state){
            state.userData.nb_malades+=state.userData.production_click;
        },
        removeMalades(state, price){
            state.userData.nb_malades -= price;
        },
        addMaladeAuto(state){
            state.userData.nb_malades+=(state.userData.production_per_sec/10);
        },
        activePower(state, id){
            state.userData.powers.forEach( power => {
                if(power.id === id){
                    power.actif = true;
                }
            })
        },
        increaseProductionClick(state, coeff){
            state.userData.production_click*=coeff;
        },
        increaseProductionItem(state, power){
            state.userData.items.forEach(i => {
                if(i.id === power.item_id){
                    console.log(i);
                    console.log(i.production);
                    console.log(power.coeff);
                    i.production*=power.coeff;
                }
            });
        },
        updateItem(state,id){
            let coeff_regression = 0.99;
            let item = {};
            
            state.userData.items.forEach(i => {
                if(i.id === id){
                    item = i;
                }
            });

            if(state.userData.nb_malades >= item.price){
                state.userData.nb_malades -= item.price; //Déduit le prix
                item.number++; //Incrémente le nombre
                item.price*=(1+item.coeffPrice);
                item.coeffPrice*=coeff_regression; //Augmenter l'inflation du prix
            }
            // console.log("Vous avez: " + state.items[id].number + " " + state.items[id].name + "s");
        },
        updateProductionPerSec(state){
            let somme = 0;
            state.userData.items.forEach(item => {
                somme += item.number*item.production;
            });

            state.userData.production_per_sec = somme;
        },
    },
    actions: {
        addMaladeAction: function(context){
            // console.log("Incrément du nombre de malades");
            context.commit('addMalade');
        },
        removeMaladesAction: function(context, price){
            context.commit('removeMalades', price);
        },
        activePowerAction: function (context, id) {
            console.log("Vous avez activé le pouvoir avec l'id : "+id);
            context.commit("activePower",id);
        },
        increaseProductionClickAction: function(context, coeff){
            context.commit("increaseProductionClick",coeff);
        },
        increaseProductionItemAction: function(context, power){
            context.commit("increaseProductionItem",power);
            context.commit("updateProductionPerSec");
        },
        addMaladeAutoAction: function(context){
            context.commit('addMaladeAuto');
        },
        acheterPowerAction: function(context,power){
            console.log("Updating...");
            context.commit("removeMalades",power.price);
            context.commit("activePower",power.id);
        },
        acheterItemAction: function(context,id){
            console.log("Achat d'Item");
            context.commit('updateItem',id);
            context.commit('updateProductionPerSec');
        },
    },
    getters: {
        getNbMalades: function (state) {
            return state.userData.nb_malades;
        },
        getProductionClick: function (state) {
            return state.userData.production_click;
        },
        getProductionPerSec: function (state) {
            return state.userData.production_per_sec;
        },
        getPowersActivities: function(state){
            return state.userData.powers;
        },
        getItemsDynamicsValue: function(state){
            return state.userData.items;
        },
    }
});
