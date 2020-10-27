import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        nb_clicks: 0,
        coeff:1,
        nb_contamine:0
    },
    mutations: {
        incrementNbContamine(state){
            if(0 === state.nb_clicks%100 && 0 !== state.nb_clicks){
                state.coeff = state.coeff*2;
                console.log("Incrément du coefficient effectué");
            }
            console.log("Le coeff est de " + state.coeff);
        },
        addClick(state){
            state.nb_clicks = state.nb_clicks+(1*state.coeff);
        }
    },
    actions: {
        // incrementCoeffAction:function(context){
        //     console.log("Appelle à fonction permettant l'incrément du coefficient");
        //     context.commit('incrementCoeff');
        // },
        addClickAction: function(context){
            console.log("Incrément du nombre de clicks");
            context.commit('incrementNbContamine');
            context.commit('addClick');
        }
    },
    getters: {
        getNbClicks: function (state) {
            return state.nb_clicks;
        }
    }
});
