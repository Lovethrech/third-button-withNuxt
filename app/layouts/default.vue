<script setup>
useHead({
    meta:[
        {
            name:'viewport',
            content: 'width=device-width,initial-scale=1'
        },
        {
            name:'application-name',
            content:'ThirdButton'
        },
        {
            name:'author',
            content:'Olaonipekun Dolapo Rachael'
        },
        {
            name:'description',
            content:'ThirdButton IT Consulting Company'
        },
        {
            name:'keywords',
            content:'ThirdEyeButton, thirdeyebutton, thirdEyebutton, thirdEyeButton,ThirdEyeButton IT Comapany, ThirdEyeButton IT Consultant, ThirdEyeButton IT Consulting Company, ThirdEyeButton It Consulting company'
        },
        {
            name:'robots',
            content:'notranslate'
        },
        {
            name:'robots',
            content:'noimageindex'
        },
        {
            name:'mobile-web-app-capable',
            content:'yes'
        },
        {
            name:'apple-mobile-web-app-capable',
            content:'yes'
        }
    ],
    link:[
        {
            rel:'icon',
            href: '/logo.png'
        },
        {
            rel:'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css'
        },
        {
            rel:'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href: 'https://fonts.gstatic.com',
        },
        {
            rel:'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400;500;600;700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap'
        }
    ]

})
</script>

<template>
    <div>
        <h1>Default page</h1>
        <NuxtPage/>
    </div>
</template>

<style scoped>
/* color palette from <https://github.com/vuejs/theme> */
:root {
    --vt-c-white: #ffffff;
    --vt-c-white-soft: #f8f8f8;
    --vt-c-white-mute: #f2f2f2;
}

/* semantic color variables for this project */
:root {
    --color-background: var(--vt-c-white);
    --color-background-soft: var(--vt-c-white-soft);
    --color-background-mute: var(--vt-c-white-mute);
}

@media (prefers-color-scheme: dark) {
    :root {
        --color-background: var(--vt-c-white);
        --color-background-soft: var(--vt-c-white-soft);
        --color-background-mute: var(--vt-c-white-mute);
    }
}

* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    list-style: none;
    color:#000000;
    text-decoration: none;
    outline: none;
    font-weight: normal;
}

body {
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>