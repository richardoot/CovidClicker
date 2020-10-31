<template>
    <b-col id="clicker" class="vh-100">
            <h1>Component "Clicker"</h1>
            <b-row>
                <b-col style="color: black; background-color: pink; margin:5px;">
                    <h1>{{arrondirValeur(nbMalades)}} Malades</h1>
                    <h3>Malades/sec: {{productionPerSec}}</h3>
                    <h3>Malades/click: {{productionClick}}</h3>
                </b-col>
            </b-row>
            <b-row class="h-50">
                <b-col style="color: black; background-color: pink; margin:5px;">
                    <a v-on:click="$emit('addMalade')" href="#" style="display:block;width:100%;height:100%;text-decoration:none;color:white">
                        <b-img  id="imgCovid" :src="require('../assets/covid_1.png')"  fluid  alt="Image responsive"/>
                    </a>
                </b-col>
            </b-row>
    </b-col>
</template>

<script>
import store from '../store/store';

export default {
  props:[
      'nbMalades'
  ],
  methods:{
    arrondirValeur(valeur){
        return Math.round(valeur)
    }
  },
  computed:{
      productionClick: function (){
          return store.getters.getProductionClick;
      },
      productionPerSec: function (){
          return store.getters.getProductionPerSec;
      }
  }
};
</script>

<style>

#clicker{
    /* color: white; */
}

#imgCovid {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin:-150px 0 0 -150px;
    -webkit-animation:spin 50s linear infinite;
    -moz-animation:spin 50s linear infinite;
    animation:spin 50s linear infinite;
}

#imgCovid:active {
    width: 280px;
    height: 280px;
    margin:-140px 0 0 -140px;
    -webkit-animation:spin 50s linear infinite;
    -moz-animation:spin 50s linear infinite;
    animation:spin 50s linear infinite;
}

@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } 
}
</style>