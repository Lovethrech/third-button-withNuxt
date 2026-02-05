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
          name:'description',
          content:''
        }
      ]
    }
  }
})
