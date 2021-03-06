var plugins = [{
      plugin: require('E:/2019 projects/Gatsby/portfolion/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('E:/2019 projects/Gatsby/portfolion/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('E:/2019 projects/Gatsby/portfolion/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-138572525-1","head":true},
    },{
      plugin: require('E:/2019 projects/Gatsby/portfolion/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Sudip Lahiri, React Developer","short_name":"Sudip","start_url":"/","display":"standalone","icon":"E:\\2019 projects\\Gatsby\\portfolion/src/static/images/logo.png","icons":[{"src":"/images/sudip.png","sizes":"48x48","type":"image/jpg"},{"src":"/images/sudip.png","sizes":"192x192","type":"image/jpg"},{"src":"/images/sudip.png","sizes":"512x512","type":"image/jpg"}]},
    },{
      plugin: require('E:/2019 projects/Gatsby/portfolion/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
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
