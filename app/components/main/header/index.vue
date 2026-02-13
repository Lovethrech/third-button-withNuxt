<script setup>
import {ref, computed} from 'vue';
import HeaderLogo from './header/HeaderLogo.vue'
import HeaderNavCtn from './header/HeaderNavCtn.vue';
import HeaderMenuIcon from './header/HeaderMenuIcon.vue';

const screenWidth=ref(window.innerWidth);
const screenHeight=ref(window.innerHeight);
const displayMenu=ref("flex");
const menuIcon=ref("<i class='ri-menu-4-line'></i>");
const screenWidthComputed= computed(()=>screenWidth); 
const screenView=screenWidthComputed.value._value;

if(screenView <= 990){
    displayMenu.value= "none";    
}
else if(screenHeight.value === 1366){
    displayMenu.value= "none";    
}
else{
    displayMenu.value="flex";
}
const showDropdown=()=>{
    if (menuIcon.value==="<i class='ri-menu-4-line'></i>"){
        menuIcon.value="<i class='ri-close-large-line'></i>";
        displayMenu.value="flex";
    }
    else{
        menuIcon.value="<i class='ri-menu-4-line'></i>";
        displayMenu.value="none";
    }
}
</script>

<template>
    <header>
        <HeaderLogo></HeaderLogo>
        <HeaderNavCtn 
            :style="{display: displayMenu}"
        >
        </HeaderNavCtn>
        <HeaderMenuIcon 
            :menuIcon="menuIcon" 
            :onClick="showDropdown"
        >
        </HeaderMenuIcon>
    </header>
</template>

<style scoped>
header{
    background-color: #cae0ff;
    padding: 0.4vh 4vw;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border: 0.02vh solid #000000;
}
</style>