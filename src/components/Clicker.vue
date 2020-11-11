<template>
    <b-col lg="3" sm="6" order-lg="1" id="clicker-container" class="component-container">
            <h1 style="margin-top: 20px">COVID-19</h1>
            <b-row>
                <b-col id="clicker_container_counter">
                    <h1>{{arrondirValeur(nbMalades)}} Malades</h1>
                </b-col>
            </b-row>
            <b-row class="h-50">
                <b-col id="clicker_cointainer_img">
                    <a v-on:click="$emit('addMalade')" href="#" style="display:block;width:100%;height:100%;text-decoration:none;color:white">
                        <b-img  id="imgCovid" :src="require('../assets/covid_1.png')"  fluid  alt="Image responsive"/>
                    </a>
                </b-col>
            </b-row>
            <b-row>
                <b-col id="clicker_container_description">
                    <h3>Malades/sec: {{productionPerSec}}</h3>
                    <h3>Malades/click: {{productionClick}}</h3>
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
@media only screen and (min-width:992px) {
    #clicker-container{
        margin: 0 30px 0 0;
    }
}
@media only screen and (max-width:992px) and (min-width:576px){
    #clicker-container{
        transform: translateX(-7.5px);
        margin-bottom: 10px;
    }
}


#clicker_container_counter, #clicker_container_description{
    margin:5px;
}

#clicker_cointainer_img{
    margin:5px;
}

#imgCovid {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: auto;
    margin:-40% 0 0 -40%;
    -webkit-animation:spin 50s linear infinite;
    -moz-animation:spin 1s linear infinite;
    animation:spin 1s linear infinite;
}

#imgCovid:active {
    animation: spin 50s linear infinite, begin-bounce 0.2s ease 1;
    width: 66.5%;
    height: auto;
    margin:-33.25% 0 0 -33.25%;
}

#imgCovid:not(:active) {
    animation: spin 50s linear infinite, end-bounce 0.2s ease 1;
    width: 80%;
    height: auto;
    margin:-40% 0 0 -40%;
}

@keyframes begin-bounce {
    0%{    
        width: 80%;
        height: auto;
        margin:-40% 0 0 -40%;
    }
    40%{
        width: 61.33%;
        height: auto;
        margin:-30.66% 0 0 -30.66%;
    }
    70%{
        width: 72%;
        height: auto;
        margin:-36% 0 0 -36%;
    }
    100%{
        width: 66.5%;
        height: auto;
        margin:-33.25% 0 0 -33.25%;
    }
}
@keyframes end-bounce {
    from{
        width: 66.5%;
        height: auto;
        margin:-33.25% 0 0 -33.25%;
    }
    40%{
        width: 82.66%;
        height: auto;
        margin:-41.33% 0 0 -41.33%;
    }
    80%{
        width: 77.33%;
        height: auto;
        margin:-38.66% 0 0 -38.66%;
    }
    to{    
        width: 80%;
        height: auto;
        margin:-40% 0 0 -40%;
    }
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