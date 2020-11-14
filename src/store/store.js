import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedIn: false,
        userData:{},
        items:[],
        powers: []
    },
    mutations: {
        login: function(state,user){
            let items = user.items;
            let powers = user.powers;
            delete user.items;
            delete user.powers;
            state.userData=user;
            state.loggedIn = true;
            if(items){
                state.items=items;
            }
            if(powers){
                state.powers=powers;
            }
        },
        logout: function(state){
            state.userData = {};
            state.items = [];
            state.powers = [];
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
        },

        /********* POWERS ***********/
        acheterPower: function(state,id){
            console.log("power3!!");
            let power;
            state.powers.forEach( current_power => {
                if(current_power.id === id){
                    power = current_power;
                }
            });

            if(state.userData.nb_malades>=power.price){
                state.userData.nb_malades -= power.price;
                power.actif = true;

                if(power.item_id>=0 && power.item_id !== null){
                    state.items.forEach(i => {
                        if(i.id === power.item_id){
                            i.production*=power.coeff;
                        }
                    });

                    let somme = 0;
                    state.items.forEach(i => {
                        somme += i.number*i.production;
                    });
                    state.userData.production_per_sec = somme;
                
                } else {
                    state.userData.production_click*=power.coeff;
                }
            }
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
        acheterPowerAction: function(context,id){
            console.log("power2!!");
            context.commit('acheterPower',id);
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
        getUserData: function(state){
            return state.userData;
        },
        getItems: function(state) {
            return state.items;
        },
        getPowers: function(state) {
            return state.powers;
        }
    }
});
