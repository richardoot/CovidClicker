<template>
  <b-row class="form-container" align-h = "center" >
    <div class="mx-auto mt-3" style="width: 300px; height: 100vh;color:white;">
      <div>
        <b-form v-on:submit.prevent="login">
          <b-form-group label="Email :" label-for="email">
            <b-form-input type="text" id="email" v-model="form.email"></b-form-input>
          </b-form-group>
          <b-form-group label="Prénom :" label-for="prenom">
            <b-form-input type="text" id="prenom" v-model="form.prenom"></b-form-input>
          </b-form-group>
          <b-form-group label="Nom :" label-for="nom">
            <b-form-input type="text" id="nom" v-model="form.nom"></b-form-input>
          </b-form-group>
          <b-form-group label="Password :" label-for="password">
            <b-form-input type="password" id="password" v-model="form.password"></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-button class="btn-info btn" type="submit" v-on:click="login">S'inscrire</b-button>
          </b-form-group>
        </b-form>
      </div>
    </div>
  </b-row>

</template>

<script>
import store from "../store/store";
import router from "../router/router";

// import sha256 from "js-sha256";
import axios from "axios";


export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        prenom: "",
        nom: "",
      },
      wrongPassword: false
    };
  },
  methods: {
    login: function(/*event*/) {
      this.wrongPassword = false;
      const email = this.form.email;
      const password = this.form.password;
      const prenom = this.form.prenom;
      const nom = this.form.nom;
      // const hashedPassword = sha256(password);
      
      axios
        .post("http://localhost:3000/user", { email, password, nom, prenom})
        .then(response => {
          // Réaction après connection
          store.dispatch("loginAction",response.data);
          router.push({name: "Game"});
        });
    }
  },
  // computed: {
  //   loggedIn: function() {
  //     return this.$store.getters.loggedIn;
  //   },
  //   username: function() {
  //     return this.$store.getters.username;
  //   }
  // }
};
</script>

<style>

</style>

