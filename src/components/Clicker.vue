<template>
    <b-col class="vh-100" style="color: white; background-color: red;" > <!-- v-on:click="" -->
        <h1>Component "Clicker"</h1>
        <b-row class="h-25">
            <div class="col" style="color: black; background-color: pink; margin:5px;">
                <h2>Sub-Component "ClickerCounter"</h2>
            </div>
        </b-row>
        <b-row class="h-50">
            <b-col style="color: black; background-color: yellow; margin:5px;">
                <h2>Sub-Component "ClickerUserAction"</h2>
            </b-col>
        </b-row>
    </b-col>
</template>

