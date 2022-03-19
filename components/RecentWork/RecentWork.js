/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img1 from '../../images/recentwork1.jpg';
import img2 from '../../images/recentwork2.jpg';
import img3 from '../../images/recentwork3.jpg';
import img4 from '../../images/recentwork4.jpg';
import img5 from '../../images/recentwork5.jpg';
import img6 from '../../images/recentwork6.jpg';
import CategoryBtn from '../CategoryBtn/CategoryBtn';
import RecentWorkCard from '../RecentWorkCard/RecentWorkCard';
import SectionHeader from '../SecHeader/SectionHeader';
import style from './recentwork.module.scss';

const recentWorkDetails = [
    {
        id: 1,
        image: img1,
        title: 'Grand Hall',
        category: 'RESIDENTIAL',
        year: '2018',
    },
    {
        id: 2,
        image: img2,
        title: 'Green Hause',
        category: 'COMMERTIAL',
        year: '2020',
    },
    {
        id: 3,
        image: img3,
        title: 'Contemporary Villa',
        category: 'LANDSCAPE',
        year: '2010',
    },
    {
        id: 4,
        image: img4,
        title: 'Buisness Office',
        category: 'COMMERTIAL',
        year: '2011',
    },
    {
        id: 5,
        image: img5,
        title: 'Hall Room',
        category: 'LANDSCAPE',
        year: '2008',
    },
    {
        id: 6,
        image: img6,
        title: 'Sweet Home',
        category: 'COMMERTIAL',
        year: '2021',
    },
];

const categoryBtn = ['ALL', ...new Set(recentWorkDetails.map((item) => item.category))];

function RecentWork() {
    const [items, setItems] = useState(recentWorkDetails);
    const [category, setCategory] = useState([]);

    const filterItems = (categorys) => {
        if (categorys === 'ALL') {
            setItems(recentWorkDetails);
            return;
        }
        const newItems = recentWorkDetails.filter((item) => item.category === categorys);
        setItems(newItems);
    };

    return (
        <div className={style.recent_work_sec}>
            <SectionHeader title="Recent Works" text="Discover Our Recent Works" />

            <div className={style.recent_work_sec_main}>
                <CategoryBtn categorBtn={categoryBtn} filterItems={filterItems} />

                <div className={style.recent_work_card_sec}>
                    {items.map((item) => (
                        <RecentWorkCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentWork;
