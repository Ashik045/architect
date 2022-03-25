import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import style from './servicecard.module.scss';

function ServiceCard({ serviceDetails }) {
    return (
        <div className={style.service_card}>
            <span className={style.service_card_icon}>{serviceDetails.icon}</span>
            <Link href="/" passHref>
                <h2>{serviceDetails.title}</h2>
            </Link>
            <p>{serviceDetails.desc}</p>
            <Link href="/" passHref>
                <button type="button" className={style.ser_card_btn}>
                    Read More <FaLongArrowAltRight className={style.ser_card_btn_icon} />
                </button>
            </Link>
        </div>
    );
}

export default ServiceCard;
