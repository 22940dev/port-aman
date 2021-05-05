require(`dotenv`).config({
  path: `.env`,
})

const thoughtsFeed = require(`./src/utils/feed`)
const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const githubToken = process.env.GITHUB_TOKEN

module.exports = {
  siteMetadata: {
    title: `Aman Kalra`,
    titleAlt: `Aman Kalra `,
    siteUrl: `https://amankalra.com`,
    description: `Passionate about products and data!
    Curious about its place in the businesses and future sustainability. Interested in working together?`,
    headline: `Passionate about products and data!`,
    language: `en`,
    image: `/banner.png`,
    author: `@amankalra172`,
  },  
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thoughts`,
        path: `${__dirname}/thoughts`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    githubToken && {
      resolve: `gatsby-source-github-api`,
      options: {
        token: githubToken,
        variables: {},
        graphQLQuery: `
          query {
            repository(owner: "Aman", name: "gatsby-themes") {
              stargazers {
                totalCount
              }
            }
          }
        `,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "G-PRE2Z4YH19",
    //     head: true,
        
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-smartypants`, 'gatsby-remark-images'],
        // TODO: Remove once this is fixed
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-smartypants`, 'gatsby-remark-images'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-PRE2Z4YH19"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `themes`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-feed`,
      options: thoughtsFeed,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aman Kalra`,
        short_name: `Aman`,
        description: `Passionate about products and data!
        Curious about its place in the businesses and future sustainability. Interested in working together?`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5A67D8`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
