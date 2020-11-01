<template>
    <b-col style="color: white; background-color: grey;" > <!-- v-on:click="" -->
        <h1>Component "Units"</h1>
        <b-row>
            <b-col id="unit-container" cols="12" v-for="item in items" :key="item.id" style="color: black; background-color: white;margin-bottom: 5px;">
                <p style="text-align:left">{{item.name}}:</p>
                <template v-for="n in item.number">
                    <b-img :style="`top:${40+((n-1)%5)*20}px;left:${(6*(n-1))}px`" :key="n" :id="`unit-image`" :src="require(`@/assets/${item.image}`)"></b-img>
                    <!-- <b-img v-if="(n%5) == 2" :style="`top:60px;left:${(6*(n-1))}px`" :key="n" :id="`unit-image`" :src="require(`@/assets/${item.image}`)"></b-img>
                    <b-img v-if="(n%5) == 3" :style="`top:80px;left:${(6*(n-1))}px`" :key="n" :id="`unit-image`" :src="require(`@/assets/${item.image}`)"></b-img>
                    <b-img v-if="(n%5) == 4" :style="`top:100px;left:${(6*(n-1))}px`" :key="n" :id="`unit-image`" :src="require(`@/assets/${item.image}`)"></b-img>
                    <b-img v-if="(n%5) == 0" :style="`top:120px;left:${(6*(n-1))}px`" :key="n" :id="`unit-image`" :src="require(`@/assets/${item.image}`)"></b-img> -->
                </template>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
import store from "../store/store";

export default {
    computed: {
        items: function(){
            return store.getters.getItems;
        }
    }
}
</script>

<style>
    #unit-container{
        position: relative;
        height: 150px;
    }
    #unit-image{
        width: 40px;
        position: absolute;
        top: 30px;
        left: 0;
    }
</style>