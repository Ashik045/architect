import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import BlogCard from '../BlogCard/BlogCard';
import style from './blogs.module.scss';

function Blogs({ bloglist }) {
    return (
        <div className={style.blogs}>
            <div className={style.blogs_left}>
                <p>FROM BLOG</p>
                <h1>Specialized news</h1>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia consequun tur magni dolores eos qui ratione.
                </p>

                <div className={style.blogs_left_card}>
                    <div className={style.left_card_top}>
                        <FaPhoneAlt className={style.left_card_top_icon} /> <p>Call us anytime</p>
                    </div>
                    <h2>+8801710502483</h2>
                </div>
            </div>
            <BlogCard bloglist={bloglist} />
        </div>
    );
}

export default Blogs;
