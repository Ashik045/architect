import React from 'react';
import { FaAtlassian, FaBattleNet, FaFigma, FaGg, FaLaravel, FaRegChartBar } from 'react-icons/fa';
import SectionHeader from '../SecHeader/SectionHeader';
import ServiceCard from '../ServiceCard/ServiceCard';
import style from './service.module.scss';

const serviceDetail = [
    {
        id: 1,
        icon: <FaAtlassian />,
        title: 'CLEAN DESIGN',
        desc: 'Success is not a spectator sport, something that just happens before your eyes. It’s an experience, a game that must be played to be.',
    },
    {
        id: 2,
        icon: <FaBattleNet />,
        title: 'CREATIVE IDEA',
        desc: 'You’ll need to get more involved with your family, friends, people you see every day. Because in that involvement, you’ll find you.',
    },
    {
        id: 3,
        icon: <FaFigma />,
        title: 'COMMUNICATION',
        desc: 'You have within you, at this very moment, all that is necessary for you to become the happy, successful person you’ve always wanted to be.',
    },
    {
        id: 4,
        icon: <FaGg />,
        title: 'PHOTOGRAPHY',
        desc: 'Being lucky in life is the result of putting yourself into action for good luck to happen to you. You’ve probably heard the statement.',
    },
    {
        id: 5,
        icon: <FaLaravel />,
        title: 'ONLINE MARKETING',
        desc: 'Success is not a spectator sport, something that just happens before your eyes. It’s an experience, a game that must be played to be.',
    },
    {
        id: 6,
        icon: <FaRegChartBar />,
        title: 'UNLIMITED SUPPORT',
        desc: 'You have within you, at this very moment, all that is necessary for you to become the happy, successful person you’ve always wanted to be.',
    },
];

function Service() {
    return (
        <div className={style.service_sec_sec}>
            <div className={style.service_sec}>
                <SectionHeader
                    title="Our Services"
                    text="Our best quality services that may satisfied you."
                />

                <div className={style.service_sec_main}>
                    {serviceDetail.map((servicedetails) => (
                        <ServiceCard key={servicedetails.id} serviceDetails={servicedetails} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
