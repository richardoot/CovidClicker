<template>
    <b-col lg="5" sm="12" order-lg="2" id="units-container" class="component-container">
        <h1 style="margin-top: 20px">Units</h1>
        <b-row>
            <b-col id="units-single-container" cols="12" v-for="item in addDynamicsValue()" :key="item.id">
                <p style="text-align:left">{{item.name}}: {{item.number}}</p>
                <template v-for="n in item.number">
                    <b-img :style="`top:${25+((n-1)%5)*20}px;left:${(6*n)+10}px`" :key="n" :id="`unit-image`" :src="require(`@/assets/${item.image}`)"></b-img>
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
    props: [
        "items"
    ],
    methods:{
        addDynamicsValue: function(){
            let dynamicItems = store.getters.getItemsDynamicsValue;
            this.items.forEach( item => {
                dynamicItems.forEach( dynamicItem => {
                    if(item.id === dynamicItem.id){
                        item.price = dynamicItem.price;
                        item.number = dynamicItem.number;
                    }
                })
            });

            return this.items.filter(item => item.number>0);
        },
    },
    computed:{
        
    }
}
</script>

<style>
    #units-container{
        overflow: auto;
        
        /* CEFDLT */
        padding: 0 25px 0 25px; 
    }
    #units-single-container{
        background-color: rgba(255, 255, 255, 0.1);
        position: relative;
        margin-bottom: 5px;
        overflow: auto;

        /* CEFDLT */
        height: 150px; 
    }
    #unit-image{
        position: absolute;
        top: 30px;
        left: 0;

        /* CEFDLT */
        width: 40px;
    }
</style>