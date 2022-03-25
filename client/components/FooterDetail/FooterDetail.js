import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import brand from '../../images/retool-icon.svg';
import FooterCol from '../FooterCol/FooterCol';
import style from './footerdetail.module.scss';

const FooterDetail1 = [
    {
        id: 1,
        text: 'Dynamic',
    },
    {
        id: 2,
        text: 'Testimonial',
    },
    {
        id: 3,
        text: 'Contact',
    },
    {
        id: 4,
        text: 'Fancy',
    },
    {
        id: 5,
        text: 'Maps',
    },
];

const FooterDetail2 = [
    {
        id: 1,
        text: 'Creative Design',
    },
    {
        id: 2,
        text: 'Customer Satisfiction',
    },
    {
        id: 3,
        text: 'Expert Team',
    },
    {
        id: 4,
        text: '24/7 Support',
    },
    {
        id: 5,
        text: 'Contact Us',
    },
];

function FooterDetail() {
    return (
        <div className={style.footer_sec}>
            <div className={style.footer_sec_main}>
                <div className={style.first_col}>
                    <div className={style.first_col_brand}>
                        <Image src={brand} alt="footer-brand" height={35} width={35} />
                        <h2>Archiect</h2>
                    </div>
                    <p>
                        We help buisnesses maximize their online persence with a personalized
                        approach to online marketing.
                    </p>
                    <p>
                        <FaPhoneAlt className={style.first_col_phn} /> +8801710502483{' '}
                    </p>
                </div>

                <div className={style.second_col}>
                    <h3>Contact</h3>
                    <p>1200 Rangpur, Dhaka</p>
                    <p>+8801710502483</p>
                    <p className={style.second_col_email}>ashikurislam045@gmail.com</p>
                    <span>
                        <FaFacebook className={style.body_iconss} />
                        <FaTwitter className={style.body_iconss} />
                        <FaLinkedin className={style.body_iconss} />
                    </span>
                </div>

                <FooterCol FooterDetail={FooterDetail1} title="Basic Info" />
                <FooterCol FooterDetail={FooterDetail2} title="Our Services" />
            </div>
        </div>
    );
}

export default FooterDetail;
