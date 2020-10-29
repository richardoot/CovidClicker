<template>
    <b-col class="vh-100" style="color: white; background-color: red;">
        <a v-on:click="$emit('addMalade')" href="#" style="display:block;width:100%;height:100%;text-decoration:none;color:white">
            <h1>Component "Clicker"</h1>
            <b-row>
                <b-col style="color: black; background-color: pink; margin:5px;">
                    <h1>{{arrondirValeur(nbMalades)}} Malades</h1>
                </b-col>
            </b-row>
            <b-row class="h-50">
                <b-col style="color: black; background-color: yellow; margin:5px;">
                    <b-img  id="imgCovid" :src="require('../assets/covid_1.png')"  fluid  alt="Image responsive"/>
                </b-col>
            </b-row>
        </a>
    </b-col>
</template>

<script>

export default {
  props:[
      'nbMalades'
  ],
  methods:{
        arrondirValeur(valeur){
            return Math.round(valeur)
        }
  }
};
</script>

<style>

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

<<<<<<< HEAD
=======
/* #imgCovid:hover {
    width: 280px;
    height: 280px;
    margin:-150px 0 0 -150px;
    -webkit-animation: spin 50s alternate infinite;
    -moz-animation: spin 50s alternate infinite;
    animation: spin 50s alternate infinite;
} */

>>>>>>> 6502c89b8ff6e3dc7799b0fd5ebf3a5b5ed89a1b
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