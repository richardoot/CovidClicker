<template>
  <div id="app">
    <b-container fluid>
      <b-row>

        <Clicker />
				<Units/>
				<Shop/>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Clicker from './components/Clicker';
import Units from './components/Units';
import Shop from './components/Shop';

export default {
  name: 'App',
  components: {
    Clicker,
    Units,
    Shop
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
