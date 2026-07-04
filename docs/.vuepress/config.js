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
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'L2 Protocol Chain', link: '/l2-protocol-chain/' },
      { text: 'Governance', link: '/governance/' }
    ],
    sidebar: [
        {
          text: 'L2 Protocol',
          collapsible: true,
          children: [
            { text: 'Introduction', link: '/l2-protocol-chain/README.md' },
            { text: 'Get Started', link: '/l2-protocol-chain/get-started.md' }
          ]
        },
        {
          text: 'Validators',
          collapsible: true,
          children: [
            { text: 'About', link: '/validators/README.md' },
            { text: 'Creation Guide', link: '/validators/validator-creation-guide.md' }
          ]
        },
        {
          text: 'Governance',
          collapsible: true,
          children: [
            { text: 'About', link: '/governance/README.md' },
            { text: 'Governance Guide', link: '/governance/governance-guide.md' }
          ]
        }
      ],
      sidebarDepth: 1
  }),

  bundler: viteBundler(),
})
