import React from 'react';
import img3 from '../../images/recentwork1.jpg';
import img2 from '../../images/recentwork5.jpg';
import img1 from '../../images/slider3.jpg';
import AboutCard from '../AboutCard/AboutCard';
import SectionHeader from '../SecHeader/SectionHeader';
import style from './aboutdetail.module.scss';

const aDetails = [
    {
        id: 1,
        image: img1,
        title: 'Interior design',
        service: [
            {
                sid: 1,
                txt: ' Modern Design',
            },
            {
                sid: 2,
                txt: 'Unique Foundation',
            },
            {
                sid: 3,
                txt: 'Smart Headting System',
            },
        ],
    },
    {
        id: 2,
        image: img2,
        title: 'Industrial premises',
        service: [
            {
                sid: 1,
                txt: 'Unique Foundation',
            },
            {
                sid: 2,
                txt: 'Customer Satisfiction',
            },
            {
                sid: 3,
                txt: 'Smart Services',
            },
        ],
    },
    {
        id: 3,
        image: img3,
        title: 'Exterior design',
        service: [
            {
                sid: 1,
                txt: 'Creative Design',
            },
            {
                sid: 2,
                txt: 'Life Time Support',
            },
            {
                sid: 3,
                txt: 'Smart Comunication',
            },
        ],
    },
];

function AboutDetail() {
    return (
        <div className={style.about_sec}>
            <SectionHeader
                title="Designing a Resilient Tomorrow"
                text="For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other."
            />
            <div className={style.about_sec_main}>
                {aDetails.map((details) => (
                    <AboutCard key={details.id} aboutDetails={details} />
                ))}
            </div>
        </div>
    );
}

export default AboutDetail;
