import React from 'react';
import Img from "gatsby-image";
import Image from "../elements/image";
import Layout from "../components/layout";
import { FiList, FiUser, FiInstagram,FiCpu,FiCodesandbox,FiLink } from "react-icons/fi";


export const query = graphql`
    query ($title: String!){
        graphCmsSectionPortfolio(sectionTitle: {eq: $title}) {
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
`






const ProjectDetails = ({data}) => {
    console.log(data)
    const projectData = data.graphCmsSectionPortfolio;
    
    return (
        <Layout>
            <div className="rn-project-details-area rn-section-gapBottom pt--90 bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="page-top">
                                    <h1 className="title_holder">{projectData.sectionTitle}</h1>
                                </div>
                                <div className="portfolio-content mt--90 mt_lg--30 mt_md--20 mt_sm--20">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content-left">
                                                <h3>Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiUser />Employer:</span><span className="projectinfo">{projectData.client}</span></li>
                                                    <li><span className="icon"><FiUser />Role:</span><span className="projectinfo">{projectData.role}</span></li>
                                                    <li><span className="icon"><FiCpu />TechStack:</span><span className="projectinfo">{projectData.techstack}</span></li>
                                                    <li><span className="icon"><FiCodesandbox />CMS:</span><span className="projectinfo">{projectData.cms}</span></li>
                                                    <li><span className="icon"><FiLink /></span><span className="projectinfo"><a href={projectData.link}>Visit</a></span></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--30 mt_sm--30">
                                            <div className="content-left">
                                                <div dangerouslySetInnerHTML={{ __html: projectData.projectEmployer.html }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40">
                                    <img src={projectData.projectPictures.url} />
                                </div>

                                <div className="image-group">
                                 
                                </div>   

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default ProjectDetails;