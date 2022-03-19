/* eslint-disable import/no-unresolved */
import React from 'react';
import { Autoplay, Pagination } from 'swiper';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import member1 from '../../images/member1.jpg';
import member2 from '../../images/member2.jpg';
import member3 from '../../images/member3.jpg';
import member4 from '../../images/member4.jpg';
import SectionHeader from '../SecHeader/SectionHeader';
import TeamCard from '../TeamCard/TeamCard';
import style from './team.module.scss';

// import required modules

const teamDetails = [
    {
        id: 1,
        image: member1,
        name: 'Albert John',
        position: 'Designer',
    },
    {
        id: 2,
        image: member2,
        name: 'Kingston Doe',
        position: 'CEO & Founder',
    },
    {
        id: 3,
        image: member3,
        name: 'John Abraham',
        position: 'Idea Expert',
    },
    {
        id: 4,
        image: member4,
        name: 'Devil Bombal',
        position: 'Engineer',
    },
];

function Team() {
    return (
        <div className={style.team_sec}>
            <div className={style.team_sec_sec}>
                <SectionHeader title="Expert Team" text="Our Expert Team Members" />

                <div className={style.team_sec_main}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {teamDetails.map((teamdetail) => (
                            <SwiperSlide key={teamdetail.id}>
                                <TeamCard key={teamdetail.id} teamDetail={teamdetail} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Team;
