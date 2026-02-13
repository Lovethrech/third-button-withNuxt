<template>
    <div 
        class="header-nav-ctn"
    >
        <MainHeaderMenuCtn/>
        <!-- <HeaderMenuCtn></HeaderMenuCtn>
        <HeaderClientBtn></HeaderClientBtn> -->
    </div>
</template>

<style scoped>
.header-nav-ctn{
    margin: auto 0;
    display: flex;
    flex-direction: row;
    gap:2vw;
}
@media screen and (max-width:990px){
    .header-nav-ctn{
        position: absolute;
        top: 7.8vh;
        right:0;
        flex-direction: column;
        gap: 4vh;
        width: 100%;
        height: 90vh;
        background: linear-gradient(to bottom, #cae0ff, #ffffff);
    }
}

@media screen and (width: 1024px) and (min-height:1360px) {
    .header-nav-ctn{
        position: absolute;
        top: 7.8vh;
        right:0;
        flex-direction: column;
        gap: 4vh;
        width: 100%;
        height: 90vh;
        background: linear-gradient(to bottom, #cae0ff, #ffffff);
        display:none;
    }
}
</style>