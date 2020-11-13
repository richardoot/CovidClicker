import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedIn: false,
        userData:{
            nb_malades:0, //nombre de malades
            production_click: 1000000,
            production_per_sec:0,
        },
        items:[
            {id: 0,   price: 10,    number: 0,  production: 0.5  },
            {id: 1,   price: 100,   number: 0,  production: 3    },
            {id: 2,   price: 1000,  number: 0,  production: 6    },
            {id: 3,   price: 5000,  number: 0,  production: 12   },
        ],
    },
    mutations: {
        login: function(state,user){
            state.userData=user;
            console.log("The user data is : %O", state.userData);
            state.loggedIn = true;
        },
        logout: function(state){
            state.loggedIn = false;
        },
        addMalade(state){
            state.userData.nb_malades+=state.userData.production_click;
        },
        removeMalades(state, price){
            state.userData.nb_malades -= price;
        },
        addMaladeAuto(state){
            state.userData.nb_malades+=(state.userData.production_per_sec/10);
        },
        increaseProductionClick(state, coeff){
            state.userData.production_click*=coeff;
        },
        updateProductionPerSec(state){
            let somme = 0;
            state.items.forEach(item => {
                somme += item.number*item.production;
            });

            state.userData.production_per_sec = somme;
        },

        /********* ITEM *********/
        increaseProductionItem(state, power){
            state.items.forEach(i => {
                if(i.id === power.item_id){
                    i.production*=power.coeff;
                }
            });
        },
        updateItem(state,id){
            let multiplicator = 1.2;
            let item = {};
            
            state.items.forEach(current_item => {
                if(current_item.id === id){
                    item = current_item;
                }
            });

            if(state.userData.nb_malades >= item.price){
                state.userData.nb_malades -= item.price; //Déduit le prix
                item.number++; //Incrémente le nombre
                item.price*=multiplicator;
            }
            // console.log("Vous avez: " + state.items[id].number + " " + state.items[id].name + "s");
        },
    },
    actions: {
        loginAction: function(context,user){
            context.commit("login",user);
        },
        logoutAction: function(context){
            context.commit("logout");
        },
        addMaladeAction: function(context){
            context.commit('addMalade');
        },
        removeMaladesAction: function(context, price){
            context.commit('removeMalades', price);
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
        acheterItemAction: function(context,id){
            context.commit('updateItem',id);
            context.commit('updateProductionPerSec');
        },
    },
    getters: {
        getloggedIn: function(state){
            return state.loggedIn;
        },
        getNbMalades: function (state) {
            return state.userData.nb_malades;
        },
        getProductionClick: function (state) {
            return state.userData.production_click;
        },
        getProductionPerSec: function (state) {
            return state.userData.production_per_sec;
        },
        getItemsDynamicsValue: function(state){
            return state.items;
        },
    }
});
