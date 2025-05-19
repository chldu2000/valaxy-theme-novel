import type { ThemeConfig } from 'valaxy-theme-novel'
import { defineConfig } from 'valaxy'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'novel',

  themeConfig: {
    // colors: {
    //   primary: 'red',
    // },

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/YunYouJun/valaxy-theme-novel',
      },
      {
        text: 'RSS',
        link: 'https://novel.valaxy.site/atom.xml',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/sGe4U4p4CK',
      },
      {
        text: 'Valaxy →',
        link: 'https://github.com/YunYouJun/valaxy',
      },
    ],

    footer: {
      since: 2020,
    },
  },
})
