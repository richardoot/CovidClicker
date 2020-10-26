<template>
  <div id="app">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <div class="container-fluid">
			<div class="row">

        <Clicker />
				<Units/>
				<Shop/>

      </div>
		</div>
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
