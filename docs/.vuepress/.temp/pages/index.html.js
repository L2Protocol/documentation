import comp from "F:/Git/documentation/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"L2 Protocol Documentation Pages\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"L2 Protocol Documentation Pages\",\"heroImage\":\"https://static.l2protocol.com/images/icon.svg\",\"heroImageDark\":\"https://static.l2protocol.com/images/icon-dark.svg\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/l2-protocol-chain/get-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"/l2-protocol-chain/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Free Infrastructure\",\"details\":\"Launch your L2 blockchain at zero cost. We provide validators, block explorers, RPC endpoints, and bridge infrastructure - everything you need to add smart contracts to your chain.\"},{\"title\":\"EVM Compatible\",\"details\":\"Full Ethereum Virtual Machine compatibility means developers can use familiar tools like Hardhat, Remix, and MetaMask. Deploy existing Solidity contracts without modification.\"},{\"title\":\"Community Driven\",\"details\":\"Democratic project selection through voting ensures we build for chains with real demand. Every user gets a daily vote, while L2P token holders can cast up to 10 additional votes.\"},{\"title\":\"Secure Consensus\",\"details\":\"Proven Parlia consensus mechanism with fast finality. Validators stake tokens as collateral, ensuring network security while achieving 3-second block times.\"},{\"title\":\"Seamless Bridging\",\"details\":\"Move assets effortlessly between your native L1 and L2 chains. Our bridge supports both native cryptocurrency and L2P tokens across all connected ecosystems.\"},{\"title\":\"Built to Scale\",\"details\":\"Based on BSC architecture, handling thousands of transactions per second with minimal fees. Grow your ecosystem without worrying about network congestion or high gas costs.\"}],\"footer\":\"Copyright © 2026-present L2 Protocol\"},\"headers\":[],\"git\":{\"updatedTime\":1769778851000,\"contributors\":[{\"name\":\"123node\",\"username\":\"123node\",\"email\":\"github@l2protocol.com\",\"commits\":1,\"url\":\"https://github.com/123node\"},{\"name\":\"L2Protocol\",\"username\":\"L2Protocol\",\"email\":\"github@l2protocol.com\",\"commits\":1,\"url\":\"https://github.com/L2Protocol\"}],\"changelog\":[{\"hash\":\"1483da58210cb5654dba83c121f7a89a52c9ef99\",\"time\":1769778851000,\"email\":\"github@l2protocol.com\",\"author\":\"L2Protocol\",\"message\":\"Theme update\"},{\"hash\":\"e7c1dd442064320a46d5d2d82f9d8b0029812a2b\",\"time\":1769774523000,\"email\":\"github@l2protocol.com\",\"author\":\"123node\",\"message\":\"First commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
