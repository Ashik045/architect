import Head from 'next/head';
import Blogs from '../components/Blogs/Blogs';
import Experience from '../components/Experience/Experience';
import Feature from '../components/Feature/Feature';
import FooterDetail from '../components/FooterDetail/FooterDetail';
import Header from '../components/Header/Header';
import RecentWork from '../components/RecentWork/RecentWork';
import Service from '../components/Service/Service';
import Team from '../components/Team/Team';
import image2 from '../images/recentwork2.jpg';
import image1 from '../images/recentwork4.jpg';

const blogList = [
    {
        id: 1,
        image: image1,
        createdAt: '15 November 2018',
        title: 'Best buildings of 2018 revealed at day one of World Architecture Festival 2018.',
    },
    {
        id: 2,
        image: image2,
        createdAt: '25 July 2003',
        title: 'Sunken washroom by Studio 304 allows residents to bathe in a garden setting.',
    },
];

export default function Home() {
    return (
        <div>
            <Head>
                <title>Architect</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <main>
                <Header />
                <Feature />
                <Experience />
                <Service />
                <RecentWork />
                <Blogs bloglist={blogList} />
                <Team />
                <FooterDetail />
            </main>
        </div>
    );
}
