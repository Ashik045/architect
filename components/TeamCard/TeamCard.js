import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPlus, FaTwitter } from 'react-icons/fa';
import style from './teamcard.module.scss';

function TeamCard({ teamDetail }) {
    return (
        <div className={style.team_card}>
            <Image
                src={teamDetail.image}
                className={style.team_card_img}
                alt="team-member"
                height={400}
                width={350}
            />

            <div className={style.team_card_body_iconss}>
                <FaFacebook className={style.body_iconss} />
                <FaTwitter className={style.body_iconss} />
                <FaLinkedin className={style.body_iconss} />
                <FaInstagram className={style.body_iconss} />
            </div>

            <div className={style.team_card_body}>
                <div className={style.team_card_body_txt}>
                    <h3>{teamDetail.name}</h3>
                    <p>{teamDetail.position}</p>
                </div>
                <FaPlus className={style.team_card_body_icon} size={25} />
            </div>
        </div>
    );
}

export default TeamCard;
