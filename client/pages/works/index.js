import axios from 'axios';
import React from 'react';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import RecentWork from '../../components/RecentWork/RecentWork';
import style from '../../styles/work.module.scss';

function Work({recentWorkDetails}) {
    return (
        <div className={style.work_page}>
            <RecentWork recentWorkDetails={recentWorkDetails}/>

            <FooterDetail />
        </div>
    );
}

export default Work;

export async function getStaticProps() {
    const res = await axios.get('http://localhost:4000/api/works')
    const workPosts = await res.data.message

    return {
        props: {
            recentWorkDetails: workPosts.slice(0, 6)
        }
    }
}