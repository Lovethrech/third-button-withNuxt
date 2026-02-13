<script setup>

import HeaderMenuDetails from "@/data/header-menu-details.json";
import HeaderMenu from './HeaderMenu.vue';
</script>

<template>
    <div 
        class="header-menu-ctn-main-ctn">
        <div 
            v-for="HeaderMenuDetail in HeaderMenuDetails"  
            class="header-menu-ctn-mini-ctn" 
            :key="HeaderMenuDetail.id"
        >
            <HeaderMenu 
                :name="HeaderMenuDetail.name" 
                :link="HeaderMenuDetail.link"
            >
            </HeaderMenu>
        </div>
    </div>
</template>

<style scoped>
.header-menu-ctn-main-ctn{
    display:flex;
    flex-direction: row;
    gap: 1.4vw;
    margin: auto 0;
}

@media screen and (max-width:990px) {
    .header-menu-ctn-main-ctn{
        flex-direction: column;
        margin:0;
        width: 100%;
        text-align:center
    }
}

@media screen and (width: 1024px) and (min-height:1360px) {
    .header-menu-ctn-main-ctn{
        flex-direction: column;
        margin:0;
        width: 100%;
        text-align:center
    }
}
</style>