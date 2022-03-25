import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import style from '../../styles/blogdetail.module.scss';



function BlogDetail({blogItem, blogList }) {
    const router = useRouter()
    const {image, title, createdAt, desc1, desc2, desc3quote, desc3, features} = blogItem

    if (router.isFallback) {
        return <p style={{textAlign: 'center', marginTop: '150px'}}>Loading...</p>
    }

    return (
        <div className={style.blog_detail_page}>
            <div className={style.blog_detail_header}>
                <Image
                    src={image}
                    alt="header-img"
                    className={style.blog_detail_header_img}
                    height={550}
                    width={1600}
                />

                <div className={style.blog_detail_header_txt}>
                    <h1>
                       {title}
                    </h1>
                    <small>
                        {new Date(createdAt).toDateString()}, <span className={style.blog_detail_tags}>Architechure</span>
                    </small>
                </div>
            </div>

            <div className={style.blog_detailss}>
                <p>{desc1}
                </p>
                <br />
                <p>
                    <b>Think about it:</b>{desc2}
                </p>
                <br />

                <h2 className={style.title2}>
                    <i>“{desc3quote}”</i>
                </h2>
                <p>{desc3}</p>
                <br />

                <h2>List of features</h2>
                <ul>
                    {features.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>

                <h2>Summary</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum nam illum
                    accusamus eaque molestias libero, veniam maxime, sequi accusantium ea error illo
                    soluta repudiandae est beatae id doloribus ut fuga modi qui dolorum. Maxime
                    autem inventore nemo placeat a beatae tempore est id fuga corrupti, error optio
                    numquam et animi esse facilis excepturi maiores! Velit laboriosam saepe illum
                    consectetur veniam nemo totam aliquid nam repudiandae magnam tempora
                    exercitationem, quaerat debitis distinctio omnis maxime sapiente commodi.{' '}
                </p>
            </div>

            <div className={style.blog_bottom}>
                <h1>You might also like</h1>
                <BlogCard bloglist={blogList} />
            </div>

            <FooterDetail />
        </div>
    );
}

export default BlogDetail;

export async function getStaticPaths() {
    const res = await axios.get(`http://localhost:4000/api/blogs`)
    const data = res.data.message

    const paths = data.map((item) => ({
        params: {
           blogid: `${item._id}`
       }
   }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await  axios.get(`http://localhost:4000/api/blogs/${params.blogid}`)
    const res2 = await  axios.get('http://localhost:4000/api/blogs')
    const data = await res.data.message
    const data2 = await res2.data.message

    return {
        props: {
            blogItem: data,
            blogList: data2.slice(6, 9)
        }
    }
}