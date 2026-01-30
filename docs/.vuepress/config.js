import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'L2 Protocol',
  description: 'Documentation Pages',

  head: [
    ['link', { rel: 'icon', href: 'https://static.l2protocol.com/images/icon.svg' }],
  ],  

  theme: defaultTheme({
    logo: 'https://static.l2protocol.com/images/icon.svg',
    logoDark: 'https://static.l2protocol.com/images/icon-dark.svg',
    logoAlt: 'L2 Protocol - Smart Contracts for Any Chain',
    heroImage: 'https://static.l2protocol.com/images/icon.svg',
    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
