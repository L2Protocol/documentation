export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/Git/documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"L2 Protocol Documentation Pages"} }],
  ["/l2-protocol-chain/get-started.html", { loader: () => import(/* webpackChunkName: "l2-protocol-chain_get-started.html" */"F:/Git/documentation/docs/.vuepress/.temp/pages/l2-protocol-chain/get-started.html.js"), meta: {"title":"Adding L2 Protocol to MetaMask"} }],
  ["/l2-protocol-chain/", { loader: () => import(/* webpackChunkName: "l2-protocol-chain_index.html" */"F:/Git/documentation/docs/.vuepress/.temp/pages/l2-protocol-chain/index.html.js"), meta: {"title":"L2 Protocol - Smart Contracts for Any Chain"} }],
  ["/validators/", { loader: () => import(/* webpackChunkName: "validators_index.html" */"F:/Git/documentation/docs/.vuepress/.temp/pages/validators/index.html.js"), meta: {"title":"Validators"} }],
  ["/validators/validator-creation-guide.html", { loader: () => import(/* webpackChunkName: "validators_validator-creation-guide.html" */"F:/Git/documentation/docs/.vuepress/.temp/pages/validators/validator-creation-guide.html.js"), meta: {"title":"Validator Creation Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/Git/documentation/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
