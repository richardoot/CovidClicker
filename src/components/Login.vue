<template>
  <b-row class="form-container" align-h = "center" >
    <div class="mx-auto mt-3" style="width: 300px; height: 100vh;color:white;">
      <div>
        <b-form v-on:submit.prevent="login">
          <b-form-group label="email :" label-for="email">
            <b-form-input type="text" id="email" v-model="form.email"></b-form-input>
          </b-form-group>
          <b-form-group label="Password :" label-for="password">
            <b-form-input type="password" id="password" v-model="form.password"></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-button class="btn-info btn" type="submit" v-on:click="login">Se connecter</b-button>
          </b-form-group>
        </b-form>
        <b-alert
          variant="danger"
          dismissible
          :show="wrongPassword"
          @dismissed="wrongPassword=false"
        >Mauvais couple username/password</b-alert>
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
        password: ""
      },
      wrongPassword: false
    };
  },
  methods: {
    login: function(/*event*/) {
      this.wrongPassword = false;
      const email = this.form.email;
      const password = this.form.password;
      // const hashedPassword = sha256(password);
      
      axios
        .post("http://localhost:3000/login", { email, password })
        .then(response => {
          // Réaction après connection
            store.dispatch("loginAction",response.data);
            router.push({name: "Game"});
        })
        .catch(error => {
          console.log(error);
          this.wrongPassword = true;
        });
    }
  },
  computed: {
    // loggedIn: function() {
    //   return store.getters.loggedIn;
    // },
    // username: function() {
    //   return store.getters.username;
    // }
  }
};
</script>

<style>

</style>

