import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import style from './blogcard.module.scss';

function BlogCard({ bloglist }) {
    return (
        <Link href="/blog/124" passHref>
            <div className={style.blog_cards}>
                {bloglist.map((lists) => (
                    <div key={lists.id} className={style.blog_card}>
                        <Image
                            src={lists.image}
                            width={300}
                            height={200}
                            alt="card-img"
                            className={style.blog_card_img}
                        />
                        <p>{lists.createdAt}</p>
                        <h3>{lists.title}</h3>
                        <p className={style.readmore}>
                            Read More <FaArrowRight className={style.readmore_icon} />
                        </p>
                    </div>
                ))}
            </div>
        </Link>
    );
}

export default BlogCard;
