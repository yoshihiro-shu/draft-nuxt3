import { defineNuxtConfig } from 'nuxt'
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/ui/',
  // components: {
  //   global: true,
  //   dirs: ['~/components']
  // },
  modules: ['@nuxtjs/tailwindcss'],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
    }
  },
  runtimeConfig:{
    hogehoge: "fugafuga",
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost/',
      hugahuga: "hugahuga"
    }
  }
})
