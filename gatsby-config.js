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
                {
                  resolve: "gatsby-remark-embed-gist",
                  options: {
                    // Optional:
          
                    // the github handler whose gists are to be accessed
                    username: "p14n",
          
                    // a flag indicating whether the github default gist css should be included or not
                    // default: true
                    gistDefaultCssInclude: false,
          
                    // a flag indicating whether the github default gist css should be preloaded or not
                    // use this if you want to load the default css asynchronously.
                    // default: false
                    gistCssPreload: false,
          
                    // a string that represents the github default gist css url.
                    // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
                    //gistCssUrlAddress: "<string>"
                  }
                }
              ],
            },
          },        
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-theme-ui`,
        `gatsby-plugin-sharp`,
        
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
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images`,
          name: `images`,          
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