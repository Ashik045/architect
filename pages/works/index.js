import React from 'react';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import RecentWork from '../../components/RecentWork/RecentWork';
import style from '../../styles/work.module.scss';

function Work() {
    return (
        <div className={style.work_page}>
            <RecentWork />

            <FooterDetail />
        </div>
    );
}

export default Work;
