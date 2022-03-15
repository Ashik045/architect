/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './featurecard.module.scss';

function FeatureCard({ detail }) {
    return (
        <div className={style.feature_card}>
            <Image src={detail.icon} alt="feature-icon" />
            <Link href="/">
                <h2>{detail.title}</h2>
            </Link>
            <p>{detail.text}</p>
            <Link href="/">
                <button type="button" className={style.feature_card_btn}>
                    Read More
                </button>
            </Link>
        </div>
    );
}

export default FeatureCard;
