import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image";
import { FiMapPin, FiPhoneIncoming ,FiGift, FiBookOpen , FiMail, FiCalendar, FiBook} from "react-icons/fi";




const About = ( ) => {
     const data = useStaticQuery(graphql`
    query {
        allGraphCmsAbout {
            edges {
              node {
                sectionTitle
                sectionParagraph
                age
                location
                email
                phone
                resume {
                  url
                }
              }
            }
          }
    }
  `);

  const title = data.allGraphCmsAbout.edges[0].node.sectionTitle;
  const description = data.allGraphCmsAbout.edges[0].node.sectionParagraph;
  const location = data.allGraphCmsAbout.edges[0].node.location;
  const email = data.allGraphCmsAbout.edges[0].node.email;
  const phone = data.allGraphCmsAbout.edges[0].node.phone;
  const age = data.allGraphCmsAbout.edges[0].node.age;

  const resume = data.allGraphCmsAbout.edges[0].node.resume.url;
  
  const infoList = [
  
    {
        "id": "",
        "icon": <FiMapPin />,
        "label": "Location:",
        "link": location
    },
   
    {
        "id": "4",
        "icon": <FiMail />,
        "label": "Mail:",
        "link": email
    },
    {
        "id": "4",
        "icon": <FiCalendar />,
        "label": "Age:",
        "link": age
    },
    
    {
        "id": "4",
        "icon": <FiPhoneIncoming />,
        "label": "Phone:",
        "link": phone
    },
]





console.log(data)
 

    return (
        <div className="rb-about-area about-style-01 rn-section-gap bg-color-white" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                       
                    </div>
                </div>
                <div className="row mt--60 mb--30 row--25">
                <div className="section-title">
                            
                            <h2 className="title">ABOUT ME</h2>
                        </div>
                    <div className="col-lg-7 col-md-12 col-12 mt_md--40 mt_sm--40">
                        <div className="inner">
                            <div className="content">
                                <div className="section-title">
                                  
                                    <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
                                </div>
                                {infoList &&
                                    <ul className="myabout-list">
                                        {infoList.map((value, index) => (
                                            <div className="list" key={index}>
                                                <div className="icon">{value.icon}</div>
                                                <span className="label">{value.label}</span>
                                                <a className="link" href="#labelvalue">{value.link}</a>
                                            </div>
                                        ))}
                                    </ul>
                                }
                                <div className="button-group mt--20">
                                   <a className="rn-button"  target="_blank"  href={resume}><span>Resume</span></a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
