import React, {Fragment, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql , Link} from 'gatsby';
import Img from "gatsby-image";
import Scrollspy from 'react-scrollspy';
import { FaFacebookF ,FaTwitter, FaLinkedinIn , FaInstagram , FaBehance } from "react-icons/fa";
import profile from '../../assets/images/profile.jpeg'


// Start Header Area 
const Header = () => {
    const headerQuery = useStaticQuery(graphql`
        query headerQuery {
            allMenuJson {
                nodes {
                    title
                    path
                }
            },
            file(relativePath: {eq: "images/logo/desktop-light-logo.png"}) {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `);

    const arloLogo = headerQuery.file.childImageSharp.fixed;

    return (
        <Fragment>
            <header className="rn-header header-with-sidebar d-none d-xl-block">
                <div className="header-inner">
                    {/* Header Logo  */}
                    <div className="logo">
                        <Link to="/">
                        <img className="  portfolio-images" src={profile} />
                           
                        </Link>
                    </div>

                    <div className="mainmenu-inner">
                        <div className="mainmenu">
                            <Scrollspy className="mainmenu" items={['home','about', 'service', 'portfolio' , 'news' , 'contact']} currentClassName="is-current" offset={-200}>
                                <li>
                                    <a className="nav-link menu-hover-link" href="/#home">
                                        <span className="hover-item">
                                            <span data-text="Home">Home</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link menu-hover-link" href="/#about">
                                        <span className="hover-item">
                                            <span data-text="About">About</span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a className="nav-link menu-hover-link" href="/#portfolio">
                                        <span className="hover-item">
                                            <span data-text="Portfolio">Portfolio</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link menu-hover-link" href="/#service">
                                        <span className="hover-item">
                                            <span data-text="Services">What I Do</span>
                                        </span>
                                    </a>
                                </li>
                              
                               
                                <li>
                                    <a className="nav-link menu-hover-link" href="/#contact">
                                        <span className="hover-item">
                                            <span data-text="Contact">Contact</span>
                                        </span>
                                    </a>
                                </li>

                            </Scrollspy>
                        </div>
                    </div>

                    {/* Start Header Bottom  */}
                  

                </div>
            </header>
            
        </Fragment>
    )
}
// End Header Area 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
