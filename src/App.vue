<template>
  <div id="app">
    <div id="backbround_img"></div>

    <b-container fluid>
  
      <Navbar/>

      <!-- Contenu du site -->
      <router-view></router-view>
        
    </b-container>

  </div>
</template>

<script>
import store from "./store/store";
import Navbar from "./components/Navbar"
// import router from "../src/router/router";


export default {
  name: 'App',
  components:{
    Navbar,
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
  padding: 7vh 3vh 3vh 3vh;
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
  z-index: 0;
}

.component-container{
  height: 90vh;
  background-color: rgba(91,84,84, 0.5);
  border-radius: 30px;
  color: white;
}

  @media only screen and (max-width:768px){
    .component-container{
      height: 70vh;
      margin-bottom: 10px;
    }
  }

  .form-container{
    position: relative;
    z-index: 1;
  }

</style>
