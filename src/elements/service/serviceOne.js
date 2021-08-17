import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const ServiceOne = (props) => {
    const aboutQueryData = useStaticQuery(graphql`
        query  {
            allGraphCmsSectionWhatIDo {
                edges {
                  node {
                    sectionTitle
                    sectionDescription{
                        html
                        markdown
                        text
                        raw
                    }
                  }
                }
              }
        }
    `);
    const services = aboutQueryData.allGraphCmsSectionWhatIDo.edges
    console.log("services",aboutQueryData)
    return (
        <>
            {services.map((data) => (
                <div className={props.column} key={data.node.id}>
                    <div className={`service ${props.serviceStyle}`}>
                        <div className="inner">
                            <div className="number">
                        
                            </div>
                            <div className="content  whatIDoCard">
                                <h3 className="title">{data.node.sectionTitle}</h3>
                                <p className="description" dangerouslySetInnerHTML={{ __html: data.node.sectionDescription.html }}></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ServiceOne
