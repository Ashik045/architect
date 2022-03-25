import Image from 'next/image';
import React from 'react';
import FooterDetail from '../components/FooterDetail/FooterDetail';
import ServicePdetail from '../components/ServicePdetail/ServicePdetail';
import serviceHeader from '../images/recentwork4.jpg';
import style from '../styles/service.module.scss';

function Services() {
    return (
        <div className={style.service_page}>
            <div className={style.service_page_header}>
                <Image
                    src={serviceHeader}
                    alt="service-header"
                    className={style.service_page_header_img}
                    height={550}
                />

                <div className={style.service_page_header_txt}>
                    <h1>Our services</h1>
                    <p>For each project we establish relationships with partners</p>
                </div>
            </div>

            <ServicePdetail />
            <FooterDetail />
        </div>
    );
}

export default Services;
