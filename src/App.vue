<template>
  <div id="app">
    <b-container fluid>
      <b-row>

        <Clicker 
          v-on:addClick="addClick"
          v-bind:nbClick="nbClick"
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
    addClick: function(){
      store.dispatch("addClickAction");
    }
  },
  computed:{
    nbClick: function(){
      return store.getters.getNbClicks;
    },
    
  }
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
