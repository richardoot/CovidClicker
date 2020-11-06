<template>
    <b-col cols="3" id="shop-container">
        <h1>Shop</h1>
        <b-row>
            <ShopPowers
                v-bind:items="items"
            />
        </b-row>
        <b-row>
            <ShopItems
                v-bind:items="items"
            />
        </b-row>
    </b-col>
</template>

<script>
// import store from "../store/store";

import ShopItems from "../components/ShopItems"; 
import ShopPowers from "../components/ShopPowers"; 

export default {
    props:[
        "items"
    ],
    components:{
        ShopItems,
        ShopPowers
    },
};
</script>

<style>

#shop-container{
    height: 94vh;
    background-color: rgba(91,84,84, 0.5);
    border-radius: 30px;
    color: white;
    margin: 0 0 0 30px;
}


</style>