<template>
    <b-col md="3" id="shop-container">
        <h1 style="margin-top: 20px">Shop</h1>
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

    .s-item{
       border-radius: 0px;
       margin: 2px 0 2px 0;
       font-weight: bold;
    }
    .s-item:focus {
        outline:0;
    }

    #s-available{
       background-color: rgba(255, 255, 255, 0.1);
       color: rgb(85, 180, 82)
    }
    #s-available:hover{
       border:3px solid rgba(210, 214, 183, 0.767);
       margin: 0px;
    }
    #s-available:active{
        background-color: rgba(210, 214, 183, 0.3);
    }

    #s-disable{
        background-color: rgba(204, 78, 56, 0.1);
    }
    #s-disable:active{
        background-color: rgba(204, 78, 56, 0.3);
    }


</style>