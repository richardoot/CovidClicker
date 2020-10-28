import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        nb_malades:0, //nombre de malades
        items: [
            {id: 0, name: "pangolin", price: 10, number: 0, coeffPrice: 0.2, production: 1},
            {id: 1, name: "cluster", price: 100, number: 0, coeffPrice: 0.3, production: 10}
            {id: 2, name: "fêtes de Bayonne", price: 1000, number: 0, coeffPrice: 0.5, production: 100}
        ] // ensemble des items
    },
    mutations: {
        acheterItem(state,id){
            let coeffPrice_progression = 0.05;
            let item = state.items[id]; 
            if(state.nb_malades >= item.price){
                item.number++; //Incrémente le nombre
                state.nb_malades -= item.price; //Déduit le prix
                item.price*=1+item.coeffPrice;
                item.coeffPrice+=coeffPrice_progression;
            }
            console.log("Vous avez: " + state.items[id].number + " " + state.items[id].name + "s");
        },
        addMalade(state){
            state.nb_malades+=100;
        },
        addMaladeAuto(state){
            let somme = 0;
            state.items.forEach(item => somme+= (item.production*item.number));
            state.nb_malades+=somme/10;
        }
    },
    actions: {
        addMaladeAction: function(context){
            console.log("Incrément du nombre de malades");
            context.commit('addMalade');
        },
        acheterItemAction: function(context,id){
            console.log("Achat d'Item");
            context.commit('acheterItem',id);
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
        }
    }
});
