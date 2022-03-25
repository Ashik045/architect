import Image from 'next/image';
import React from 'react';
import style from './servicepcard.module.scss';

function ServicePcard({ servicePdetails }) {
    const { image, title, text } = servicePdetails;
    return (
        <div className={style.servicep_card}>
            <Image src={image} alt="about-img" className={style.servicep_card_img} />
            <div className={style.servicep_card_body}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ServicePcard;
