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
    //   primary: '${nv-c-brand}',
    // },

    nav: {
      showIcon: true,
      showTitle: true,
      items: [
        {
          text: 'GitHub',
          link: 'https://github.com/chldu2000/valaxy-theme-novel',
          icon: 'i-ri-github-line',
        },
        {
          text: 'RSS',
          link: 'https://novel.valaxy.site/atom.xml',
          icon: 'i-ri-rss-line',
        },
        // {
        //   text: 'Discord',
        //   link: 'https://discord.gg/sGe4U4p4CK',
        // },
        {
          text: 'Valaxy',
          link: 'https://valaxy.site',
        },
      ],
    },

    footer: {
      since: 2020,
      icon: {
        name: 'i-ri-book-open-line',
        animated: true,
        color: 'var(--nv-c-brand)',
        url: 'https://afool.top/',
        title: 'A url, now lead you to my site',
      },
    },
  },
})
