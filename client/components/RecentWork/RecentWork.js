import React, { useState } from 'react';
import CategoryBtn from '../CategoryBtn/CategoryBtn';
import RecentWorkCard from '../RecentWorkCard/RecentWorkCard';
import SectionHeader from '../SecHeader/SectionHeader';
import style from './recentwork.module.scss';

function RecentWork({recentWorkDetails}) {
    const [items, setItems] = useState(recentWorkDetails);
    const categoryBtn = ['ALL', ...new Set(recentWorkDetails.map((item) => item.category))];

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
                        <RecentWorkCard key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentWork;
