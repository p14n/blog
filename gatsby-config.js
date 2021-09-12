const siteMetadata = {
    title: `An Actual Dean`,
    description: `Dean's software treasures`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `https://weareactual.com`,
    authorName: `Dean Chapman`,
    twitterUsername: `@anactualdean`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,    
  };

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-theme-ui`,
           `gatsby-plugin-sharp`,
            {
              resolve: `gatsby-plugin-mdx`,
              options: {
                gatsbyRemarkPlugins: [
                  {
                    resolve: `gatsby-remark-images`,
                    options: {
                      maxWidth: 640,
                    },
                  },
                ],
              },
            },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                path: `${__dirname}/content/`,
              },
            },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content`,
          name: `content`,
        },
      },
      {
        resolve: `gatsby-plugin-clicky`,
        options: {
          siteId: '101333119'
        }
      }      
    ],
  };