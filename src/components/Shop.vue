<template>
    <b-col id="shop">
        <h1>Component "Shop"</h1>
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

#shop{
    /* color: white; */
}


</style>