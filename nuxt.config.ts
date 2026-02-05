// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      title:'ThirdButton IT Solution',
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
      ]
    }
  }
})
