<template>
    <b-col lg="3" sm="6" order-lg="3" id="shop-container" class="component-container">
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

    @media only screen and (min-width:992px) {
        #shop-container{
            margin: 0 0 0 30px;
        }
    }
    @media only screen and (max-width:992px) and (min-width:576px){
        #shop-container{
            transform: translateX(7.5px);
            margin-bottom: 10px;
        }
    }

    #shop-container{
        overflow: auto;
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