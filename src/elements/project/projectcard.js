import React from 'react';
import {Link} from 'gatsby'
import Image from "../image";
import Img from 'gatsby-image'


const Projectcard = ({image, id, title, category, column}) => {
   
   
       const  projectImg = <img src={image} alt={title}/>
    
    return (
        <div className={column}>
            <div className="portfolio">
                <div className="thumbnail">
                    <Link to={`/work/${title}`}>
                        {projectImg}
                    </Link>
                </div>
                <div className="content">
                    <div className="inner">
                        {title && <h4 className="title"><Link to={`/project/${id}`}>{title}</Link></h4>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projectcard;
