<template>
    <b-col id="shop">
        <h1>Component "Shop"</h1>
        <b-row>
            <ShopPowers/>
        </b-row>
        <b-row>
            <ShopItems
                v-bind:items2="items"
            />
        </b-row>
    </b-col>
</template>

<script>
import ShopItems from "../components/ShopItems"; 
import ShopPowers from "../components/ShopPowers"; 

export default {
    data: function(){
        return {
            items: [
                {id: 0, name: "Pangolin",           price: 10,      number: 0,  coeffPrice: 0.25,    production: 0.5,    image:"pangolin-item.png"},
                {id: 1, name: "Test défaillant",    price: 100,     number: 0,  coeffPrice: 0.25,    production: 3,      image:"test-tube.png"},
                {id: 2, name: "Cluster",            price: 500,     number: 0,  coeffPrice: 0.25,    production: 6,      image:"cluster.png"},
                {id: 3, name: "Fêtes de Bayonne",   price: 1000,    number: 0,  coeffPrice: 0.25,    production: 12,     image:"party.png"}
            ],
        }
    },
    components:{
        ShopItems,
        ShopPowers
    },
    computed:{

    },
};
</script>

<style>

#shop{
    /* color: white; */
}


</style>