import React from 'react';
import img3 from '../../images/recentwork1.jpg';
import img6 from '../../images/recentwork3.jpg';
import img2 from '../../images/recentwork5.jpg';
import img5 from '../../images/recentwork6.jpg';
import img4 from '../../images/slider2.jpg';
import img1 from '../../images/slider3.jpg';
import SectionHeader from '../SecHeader/SectionHeader';
import ServicePcard from '../ServicePcard/ServicePcard';
import style from './servicepdetail.module.scss';

const sDetails = [
    {
        id: 1,
        image: img1,
        title: 'CLEAN DESIGN',
        text: 'Success is not a spectator sport, something that just happens before your eyes. It’s an experience, a game that must be played to be',
    },
    {
        id: 2,
        image: img2,
        title: 'CREATIVE IDEA',
        text: 'You’ll need to get more involved with your family, friends, people you see every day. Because in that involvement, you’ll find you played to be.',
    },
    {
        id: 3,
        image: img3,
        title: 'UNLIMITED SUPPORT',
        text: 'You have within you, at this very moment, all that is necessary for you to become the happy, successful person you’ve always wanted to be.',
    },
    {
        id: 4,
        image: img4,
        title: 'COMMUNICATION',
        text: 'You have within you, at this very moment, all that is necessary for you to become the happy, successful person you’ve always wanted to be.',
    },
    {
        id: 5,
        image: img5,
        title: 'ONLINE MARKETING',
        text: 'Success is not a spectator sport, something that just happens before your eyes. It’s an experience, a game that must be played to be.',
    },
    {
        id: 6,
        image: img6,
        title: 'PHOTOGRAPHY',
        text: 'Being lucky in life is the result of putting yourself into action for good luck to happen to you. You’ve probably heard the statement.',
    },
];

function ServicePdetail() {
    return (
        <div className={style.service_sec}>
            <SectionHeader
                title="We turn ideas into works of art."
                text=" The way we undertake projects is based on permanently applying values that reinforce each other: socio-cultural value, experiental value, building-technical value and economical value."
            />
            <div className={style.service_sec_main}>
                {sDetails.map((details) => (
                    <ServicePcard key={details.id} servicePdetails={details} />
                ))}
            </div>
        </div>
    );
}

export default ServicePdetail;
