module.exports = {
  siteMetadata: {
    title: `Portfolio Site`,
    description: `Edgardo Medina Web Developer Portfolio Site`,
    author: `Ed Medina`,
    siteUrl: "http://localhost:8000/",
    getform_url: "https://formspree.io/f/xayaljln",
  },

  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-us-east-1.graphcms.com/v2/ckrwcfnw30o5j01yy2xwsb2y5/master",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjgwMjQyMTEsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrcndjZm53MzBvNWowMXl5Mnh3c2IyeTUvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMWMyN2YyOTktMWUzYS00MWQ5LTlmYzEtNjY2M2MyNjZiY2JjIiwianRpIjoiY2tyd2preDRmMHNzYjAxejg0b3E4OXJ0ZCJ9.cPguvvI9xtrqZPp9oNDqwfP4YRb3qN8s2ArsiHfwpuLnfxWFyAFBYSEJc9Gk5mYA3iAe7sOGM3L80lxR7z6Y8diyi-WQ-HPG6g-l2ayW5TWIgBnO9f9eN0Xl5VwGFuMsOGngG9RVlR4yVefghwvaMVN3-vHLH0QwtOML9O4e4uNSholmdckeSqZaNQekw9GkE_oY5pgRBBp_Cve-fq8cGQ56zOWJ4RXTCPGBSrOcR0m8g7Ugjt00dwfkJZ4UKlqC1F7VyAU88cqIQIfyTBLblJpgvNopLxMy50bAHUMJ-DyHod8os02CB7mwz6_6m-iVjyym9vWotqtzq0fQj98B4SmdULiGhUvDiRZc95zp9YGIPBMLtHKmbFD6HW5lELeLFJE4e5fwwIK4bt_hERHEeiZBiifsVJ9EfI1ZXij4hxbKLp04eYNczi2eXv1l9IPehim1Ab6e3c06wwTHom6naPeg8-otSyseZxyrUxFuaGdOikjLPT1ahUtWLlKoYHqDd0pyGZ9y8PrXDVhqT9aaP7hv5aA4YHZMJLf-feAvKcblwoTwq-L78HSYiNGZ98kf0UtRpbxOnaX_LIjBM9piZQJXkcZkgwgoZ-p9rSIFzp4-O3FUX8_JU_0XvaCFrmEmo5x5-HoWRIBf8AlsBKs8pQiTY23mntCaMbdltixSk_k",
      },
    },


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    
    {
        resolve: "gatsby-plugin-anchor-links",
        options: {
          offset: -100
        }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    
    
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
