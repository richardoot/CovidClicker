<template>
    <b-col style="color: white; background-color: blue;" >
        <h1>Component "Shop"</h1>
        <b-row>
            <ShopItems/>
        </b-row>
        <b-row>
            <ShopPowers/>
        </b-row>
    </b-col>
</template>

<script>
import ShopItems from "../components/ShopItems"; 
import ShopPowers from "../components/ShopPowers"; 

export default {
    components:{
        ShopItems,
        ShopPowers
    },
    props:[
        
    ],
};
</script>