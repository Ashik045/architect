/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import style from './blogcard.module.scss';

function BlogCard({ bloglist }) {
    return (
        <div className={style.blog_cards}>
            {bloglist?.map((lists) => (
                <Link href={`/blog/${lists._id}`} passHref key={lists._id}>
                    <div key={lists._id} className={style.blog_card}>
                        <Image
                            src={lists.image}
                            width={450}
                            height={270}
                            alt="card-img"
                            className={style.blog_card_img}
                        />
                        <p>{new Date(lists.createdAt).toLocaleString()}</p>
                        <h3>{lists.title}</h3>
                        <p className={style.readmore}>
                            Read More{' '}
                            <FaArrowRight
                                className={style.readmore_icon}
                                style={{ marginTop: '3px' }}
                            />
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BlogCard;
