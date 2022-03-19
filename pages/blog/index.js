import Image from 'next/image';
import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import SectionHeader from '../../components/SecHeader/SectionHeader';
import image2 from '../../images/recentwork2.jpg';
import image1 from '../../images/recentwork4.jpg';
import style from '../../styles/blogpage.module.scss';

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
    {
        id: 3,
        image: image1,
        createdAt: '15 November 2018',
        title: 'Best buildings of 2018 revealed at day one of World Architecture Festival 2018.',
    },
    {
        id: 4,
        image: image2,
        createdAt: '25 July 2003',
        title: 'Sunken washroom by Studio 304 allows residents to bathe in a garden setting.',
    },
    {
        id: 5,
        image: image1,
        createdAt: '15 November 2018',
        title: 'Best buildings of 2018 revealed at day one of World Architecture Festival 2018.',
    },
    {
        id: 6,
        image: image2,
        createdAt: '25 July 2003',
        title: 'Sunken washroom by Studio 304 allows residents to bathe in a garden setting.',
    },
];

function BlogPage() {
    return (
        <div className={style.blog_page}>
            <div className={style.blog_page_header}>
                <Image
                    src={image1}
                    alt="header-img"
                    className={style.blog_page_header_img}
                    height={450}
                />
            </div>

            <SectionHeader
                title="Our Blogs"
                text="Read the blogs to know about us & our Services"
            />
            <div className={style.blog_page_main}>
                <BlogCard bloglist={blogList} />
            </div>
            <FooterDetail />
        </div>
    );
}

export default BlogPage;
