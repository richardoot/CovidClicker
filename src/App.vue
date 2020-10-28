<template>
  <div id="app">
    <b-container fluid>
      <b-row>

        <Clicker 
          v-on:addMalade="addMalade"
          v-bind:nbMalades="nbMalades"
        />
				<Units/>
				<Shop/>
        
      </b-row>
    </b-container>

  </div>
</template>

<script>
import store from "./store/store";
import Clicker from './components/Clicker';
import Units from './components/Units';
import Shop from './components/Shop';

export default {
  name: 'App',
  components: {
    Clicker,
    Units,
    Shop
  },
  methods:{
    addMalade: function(){
      store.dispatch("addMaladeAction");
    },

  },
  computed:{
    nbMalades: function(){
      return store.getters.getNbMalades;
    },
  },
  mounted:function(){
    setInterval(() => {
      store.dispatch('addMaladeAutoAction');
    }, 100);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
