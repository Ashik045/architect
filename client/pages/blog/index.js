import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import SectionHeader from '../../components/SecHeader/SectionHeader';
import image1 from '../../images/recentwork4.jpg';
import style from '../../styles/blogpage.module.scss';

function BlogPage({ blogList }) {
    return (
        <div className={style.blog_page}>
            <div className={style.blog_page_header}>
                <Image
                    src={image1}
                    alt="header-img"
                    className={style.blog_page_header_img}
                    height={600}
                    width={1700}
                    // layout="fill"
                    // objectFit="cover"
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

export async function getStaticProps() {
    const res2 = await axios.get('https://architect22.herokuapp.com/api/blogs');
    const data = await res2.data.message;

    return {
        props: {
            blogList: data.slice(0, 6),
        },
    };
}
