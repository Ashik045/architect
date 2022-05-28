import axios from 'axios';
import Head from 'next/head';
import Blogs from '../components/Blogs/Blogs';
import Experience from '../components/Experience/Experience';
import Feature from '../components/Feature/Feature';
import FooterDetail from '../components/FooterDetail/FooterDetail';
import Header from '../components/Header/Header';
import RecentWork from '../components/RecentWork/RecentWork';
import Service from '../components/Service/Service';
import Team from '../components/Team/Team';
import style from '../styles/index.module.scss';

export default function Home({ recentWorkDetails, blogList }) {
    return (
        <div>
            <Head>
                <title>Architect</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <main className={style.main_home}>
                <Header />
                <Feature />
                <Experience />
                <Service />
                <RecentWork recentWorkDetails={recentWorkDetails} />
                <Blogs bloglist={blogList} />
                <Team />
                <FooterDetail />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const res = await axios.get('https://architect22.herokuapp.com/api/works');
    const res2 = await axios.get('https://architect22.herokuapp.com/api/blogs');
    const workPosts = await res.data.message;
    const blogList = await res2.data.message;

    return {
        props: {
            recentWorkDetails: workPosts.slice(0, 6),
            blogList: blogList.slice(0, 2),
        },
    };
}
