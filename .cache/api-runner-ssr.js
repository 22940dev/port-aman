var plugins = [{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-omni-font-loader/gatsby-ssr'),
      options: {"plugins":[],"enableListener":true,"preconnect":["https://fonts.gstatic.com"],"interval":300,"timeout":30000,"web":[{"name":"IBM Plex Sans","file":"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"}]},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"anonymize":true,"head":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-remark-autolink-headers","id":"c2a85404-f97d-5ac0-848d-e491d7dfdbe3","name":"gatsby-remark-autolink-headers","version":"2.12.0-next.0","pluginOptions":{"plugins":[],"offsetY":0,"className":"anchor"},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]},{"resolve":"C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-remark-smartypants","id":"d48194e5-b344-5f22-b93d-76045ee44e88","name":"gatsby-remark-smartypants","version":"2.11.0-next.0","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"3.11.0","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"lessBabel":true,"gatsbyRemarkPlugins":["gatsby-remark-autolink-headers","gatsby-remark-smartypants","gatsby-remark-images"],"extensions":[".mdx"],"defaultLayouts":{},"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"C:\\Users\\Jahnavi\\Documents\\GitHub\\Gatsby portfolio website orginal\\www"},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"offsetY":0,"className":"anchor"},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"feeds":[{"query":"\n        {\n          allThought(sort: { fields: date, order: DESC }) {\n            nodes {\n              title\n              date(formatString: \"MMMM D, YYYY\")\n              excerpt\n              slug\n              html\n            }\n          }\n        }\n      ","output":"rss.xml","title":"Gatsby Themes by LekoArts - Thoughts"}]},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Free & Open Source Gatsby Themes by LekoArts","short_name":"GatsbyThemes","description":"Get high-quality and customizable Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.","start_url":"/","background_color":"#fff","theme_color":"#5A67D8","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('C:/Users/Jahnavi/Documents/GitHub/Gatsby portfolio website orginal/www/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
