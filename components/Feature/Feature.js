import React from 'react';
import icon1 from '../../images/service-icon-1.png';
import icon3 from '../../images/service-icon-3.png';
import icon2 from '../../images/service-icon-4.png';
import FeatureCard from '../FeatureCard/FeatureCard';
import SectionHeader from '../SecHeader/SectionHeader';
import style from './feature.module.scss';

const featureDetails = [
    {
        id: 1,
        icon: icon1,
        title: 'Awesome Work Place',
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequun tur magni dolores',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Unlimited facility',
        text: 'Lorem ipsum dolor sit amet, ca adipisicing elit, sed do eiusmod tempor incididunt utn labore et dolore magna sed do eiusmod.',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Customer Satisfiction',
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequun tur magni dolores eos qui ratione',
    },
];

function Feature() {
    return (
        <div className={style.feature_sec}>
            <SectionHeader title="Our Feature" text="Our Quality Features" />

            <div className={style.feature_main}>
                {featureDetails.map((detail) => (
                    <FeatureCard key={detail.id} detail={detail} />
                ))}
            </div>
        </div>
    );
}

export default Feature;
