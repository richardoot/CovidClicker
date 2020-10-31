<template>
    <b-col id="shop">
        <h1>Component "Shop"</h1>
        <b-row>
            <ShopPowers/>
        </b-row>
        <b-row>
            <ShopItems/>
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

<style>

#shop{
    /* color: white; */
}


</style>