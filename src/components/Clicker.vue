<template>
    <b-col md="3" id="clicker-container">
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

#clicker-container{
    height: 94vh;
    background-color: rgba(91,84,84, 0.5);
    border-radius: 30px;
    color: white;
    margin: 0 30px 0 0;
}

#clicker_container_counter, #clicker_container_description{
    /* background-color: rgba(255,192,203,0.5);  */
    margin:5px;
}

#clicker_cointainer_img{
    /* color: black;  */
    /* background-color: rgba(255,192,203,0.5);  */
    margin:5px;
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
    animation: spin 50s linear infinite, begin-bounce 0.2s ease 1;
    width: 250px;
    height: 250px;
    margin:-125px 0 0 -125px;
}

#imgCovid:not(:active) {
    animation: spin 50s linear infinite, end-bounce 0.2s ease 1;
    width: 300px;
    height: 300px;
    margin:-150px 0 0 -150px;
}

@keyframes begin-bounce {
    0%{    
        width: 300px;
        height: 300px;
        margin:-150px 0 0 -150px;
    }
    40%{
        width: 230px;
        height: 230px;
        margin:-115px 0 0 -115px;
    }
    70%{
        width: 270px;
        height: 270px;
        margin:-135px 0 0 -135px;
    }
    100%{
        width: 250px;
        height: 250px;
        margin:-125px 0 0 -125px;
    }
}
@keyframes end-bounce {
    from{
        width: 250px;
        height: 250px;
        margin:-125px 0 0 -125px;
    }
    40%{
        width: 310px;
        height: 310px;
        margin:-155px 0 0 -155px;
    }
    80%{
        width: 290px;
        height: 290px;
        margin:-145px 0 0 -145px;
    }
    to{    
        width: 300px;
        height: 300px;
        margin:-150px 0 0 -150px;
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