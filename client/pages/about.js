import Image from 'next/image';
import React from 'react';
import AboutDetail from '../components/AboutDetail/AboutDetail';
import FooterDetail from '../components/FooterDetail/FooterDetail';
import Team from '../components/Team/Team';
import aboutHeader from '../images/aboutHeader.jpg';
import style from '../styles/about.module.scss';

function About() {
    return (
        <div className={style.about_page}>
            <div className={style.about_page_header}>
                <Image
                    src={aboutHeader}
                    alt="about-header"
                    className={style.about_page_header_img}
                    height={550}
                />

                <div className={style.about_page_header_txt}>
                    <h1>About Us</h1>
                    <p>For each project we establish relationships with partners</p>
                </div>
            </div>

            <AboutDetail />
            <Team />
            <FooterDetail />
        </div>
    );
}

export default About;
