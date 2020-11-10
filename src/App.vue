<template>
  <div id="app">
    <div id="backbround_img"></div>
    <b-container fluid>
      <b-row align-h = "center" >

        <Clicker 
          v-on:addMalade="addMalade"
          v-bind:nbMalades="nbMalades"
        />
				<Units
          v-bind:items="items"
        />
				<Shop
          v-bind:items="items"
        />
        
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
  data: function(){
      return {
          items: [
              {id: 0,     name: "Pangolin",             image:"pangolin-item.png"   },
              {id: 1,     name: "Test défaillant",      image:"test-tube.png"       },
              {id: 2,     name: "Cluster",              image:"cluster.png"         },
              {id: 3,     name: "Fêtes de Bayonne",     image:"party.png"           }
          ],
      }
  },
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
  background-color: rgb(29,29,29);
  padding: 3vh;
}

#backbround_img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% ,-50%);
  width: 100%;
  height: 100%;
  background-image: url("./assets/map.png");
  background-repeat:no-repeat;
  background-position:center center;
  background-size: 80%;
  opacity: 0.15;
}

</style>
