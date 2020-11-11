<template>
  <b-row align-h = "center" >
    <div class="mx-auto mt-3" style="width: 300px; height: 100vh;color:white;">
      <div>
        <b-form v-on:submit.prevent="login">
          <b-form-group label="Username :" label-for="username">
            <b-form-input type="text" id="username" v-model="form.username"></b-form-input>
          </b-form-group>
          <b-form-group label="Password :" label-for="password">
            <b-form-input type="password" id="password" v-model="form.password"></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-button class="btn-info btn" type="submit">Se connecter</b-button>
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
// import store from "../store/store";

// import sha256 from "js-sha256";
// import axios from "axios";

// import router from "../router/index";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      wrongPassword: false
    };
  },
  // methods: {
  //   login: function(event) {
  //     console.log(this.$store.getters.loggedIn);
  //     this.wrongPassword = false;
  //     const username = this.form.username;
  //     const password = this.form.password;
  //     const hashedPassword = sha256(password);
  //     axios
  //       .post("http://localhost:3000/login", { username, hashedPassword })
  //       .then(response => {
  //         // Réaction après connection
  //         this.$store.dispatch("loginAction",username);
  //         console.log("l'état du login est : " +this.loggedIn);
  //         console.log(this.username);
  //         router.push('/race');
  //       })
  //       .catch(error => {
  //         this.wrongPassword = true;
  //       });
  //   }
  // },
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

