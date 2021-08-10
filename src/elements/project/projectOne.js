import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Projectcard from "./projectcard";

const ProjectOne = ({graphCMS}) => {
    const ProjectData = useStaticQuery(graphql`
        query ProjectDataQuery {
            allProjectJson(limit: 6) {
                edges {
                  node {
                    id
                    title
                    category
                    featured_image {
                        childImageSharp {
                            fluid(maxWidth: 370, maxHeight: 340, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                  }
                }
            }
        }
    `);

    const projectsData = ProjectData.allProjectJson.edges;
    const graphCMSData = graphCMS.edges;
     console.log("passed Data",graphCMS)
    return (
        <div className="row row--25">
            {graphCMSData.map( data => (
                <Projectcard key={data.node.id}
                    column="col-lg-4 col-md-6 col-12"
                    portfolioStyle="portfolio-style-1"
                    image={data.node.projectLogo[0].url}
                    title={data.node.sectionTitle}
                    
                />
            ))}
        </div>
    )
}

export default ProjectOne;