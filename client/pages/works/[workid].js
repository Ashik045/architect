import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import RecentWorkCard from '../../components/RecentWorkCard/RecentWorkCard';
import style from '../../styles/singlework.module.scss';

function SingleWork({recentWorkDetails, workPosts3}) {
    const {image, category, client, createdAt, desc, location, title} = recentWorkDetails
    const router = useRouter()

    if(router.isFallback) {
        return <p style={{textAlign: 'center', marginTop: '150px'}}>Loading...</p>
    }

    return (
        <>
            <div className={style.singleWork}>
                <Image
                    src={image}
                    alt="workdetail-img"
                    className={style.singleWork_head_img}
                    height={500}
                    width={1600}
                />

                <div className={style.singleWork_main}>
                    <div className={style.singleWork_left}>
                        <h1>{title}</h1>
                        {desc.map((description, index) => {
                            return <><p key={index}>{description}</p> <br /></>
                        })}

                        <h2>Peoject Goals</h2>
                        <p>
                            You have within you, right now, at this very moment, all that is
                            necessary for you to become the happy, successful person you’ve always
                            wanted to be. All you need to do is unlock the riches that have been
                            locked away with-in you.Being lucky in life is the result of putting
                            yourself into action for good luck to happen to you. You’ve probably
                            heard the statement “The harder I work the luckier I get”. Another way
                        </p>
                    </div>

                    <div className={style.singleWork_center} />

                    <div className={style.singleWork_right}>
                        <div className={style.right_div}>
                            <h4>Client:</h4>
                            <p>{client}</p>
                        </div>
                        <div className={style.right_div}>
                            <h4>Date:</h4>
                            <p>{new Date(createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className={style.right_div}>
                            <h4>Category:</h4>
                            <p>{category}</p>
                        </div>
                        <div className={style.right_div}>
                            <h4>Location:</h4>
                            <p>{location}</p>
                        </div>
                        <div className={style.right_div}>
                            <h4>Share:</h4>
                            <p>
                                <FaTwitter className={style.right_div_icon} />{' '}
                                <FaFacebook className={style.right_div_icon} />{' '}
                                <FaInstagram className={style.right_div_icon} />
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.singleWork_bottom}>
                    <h1>Related Projects</h1>
                    <div className={style.singleWork_bottom_main}>
                        {workPosts3.map((items) => (
                            <RecentWorkCard key={items._id} item={items} />
                        ))}
                    </div>
                </div>
            </div>
            <FooterDetail />
        </>
    );
}

export default SingleWork;

export async function getStaticPaths() {
    const res = await axios.get(`http://localhost:4000/api/works`)
    const data = res.data.message

    const paths = data.map((item) => ({
         params: {
            workid: `${item._id}`
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const res = await axios.get(`http://localhost:4000/api/works/${params.workid}`)
    const res2 = await axios.get(`http://localhost:4000/api/works`)
    const workPosts = await res.data.message
    const workPosts3 = await res2.data.message
    console.log(params);

    return {
        props: {
            recentWorkDetails: workPosts,
            workPosts3: workPosts3.slice(5, 8)
        }
    }
}

