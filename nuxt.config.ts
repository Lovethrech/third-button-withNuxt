// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      
      link:[
        {
          rel:'icon',
          href: './src/assets/logo.png'
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
    }
  }
})
