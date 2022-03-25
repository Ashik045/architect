import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './recentworkcard.module.scss';

function RecentWorkCard({ item }) {
    return (
        <div className={style.work_card}>
            <Image
                src={item.image}
                height={600}
                width={450}
                className={style.work_card_img}
                alt="recent-work card"
            />

            <div className={style.work_card_txt}>
                <Link href={`/works/${item._id}`} passHref>
                    <h2>{item.title}</h2>
                </Link>
                <h5>{new Date(item.createdAt).toLocaleDateString()}</h5>
            </div>
        </div>
    );
}

export default RecentWorkCard;
