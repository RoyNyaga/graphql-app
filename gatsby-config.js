module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },

  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Tenali Ramakrishna`,
            `Pacifico`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        url: `https://api.github.com/graphql`,
        graphQLQuery: `
          query { 
            repositoryOwner(login: "RoyNyaga"){
              repositories(first: 10){
                totalCount
                edges{
                  node{
                    name
                    url
                    hasIssuesEnabled
                    createdAt
                  }
                }
              } 
            }  
          }
        `
      }
    }
  ],
}
