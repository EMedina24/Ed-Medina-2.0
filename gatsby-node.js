
const { slugify } = require('./src/utils/utilityFunctions');
const path = require('path');
const _ = require('lodash');


exports.onCreateNode = ({node , actions}) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node, 
            name: 'slug',
            value: slugFromTitle,
        });

        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
              node,
              name: "authorId",
              value: slugify(node.frontmatter.author)
            });
        }
    }
    
    if(node.internal.type === 'AuthorsJson'){
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name)
        });
    }

}



exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    //const layoutTemplate = path.resolve(`src/templates/pageTemplate.js`);
    const portfolioPages = path.resolve(`src/template/project-details.js`);
  
    const graphCMSPages = graphql(`
      query {
        allGraphCmsSectionPortfolio {
            edges {
              node {
                sectionTitle
                client
                techstack
                cms
                link
                role
                projectEmployer{
                  html
                }
                projectPictures {
                  url
                }
              }
            }
          }
      }
    `).then((result) => {
      if (result.errors) {
        throw result.errors;
      }
      result.data.allGraphCmsSectionPortfolio.edges.forEach((edge) => {
        planID = edge.node.slug;
        if (edge.node.slug === "404") {
          // for 404 page we use custom page at src/pages/404.js
          return;
        }
        createPage({
          path: `/work/${edge.node.sectionTitle}`,
          component: portfolioPages,
          context: {
            title: edge.node.sectionTitle,
          },
        });
      });
    });
    
  
  
    return Promise.all([graphCMSPages]);
  };
  






