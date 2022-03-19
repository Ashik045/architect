import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import style from './aboutcard.module.scss';

function AboutCard({ aboutDetails }) {
    const { title, image, service } = aboutDetails;
    return (
        <div className={style.about_card}>
            <Image src={image} alt="about-img" className={style.about_card_img} />
            <div className={style.about_card_body}>
                <h2>{title}</h2>
                {service.map((servic) => (
                    <p key={servic.sid}>
                        <FaCheck className={style.about_card_body_icon} /> {servic.txt}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default AboutCard;
