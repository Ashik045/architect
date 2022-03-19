import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import RecentWorkCard from '../../components/RecentWorkCard/RecentWorkCard';
import img1 from '../../images/recentwork1.jpg';
import workHeaderImg from '../../images/recentwork2.jpg';
import img3 from '../../images/recentwork3.jpg';
import img2 from '../../images/recentwork4.jpg';
import style from '../../styles/singlework.module.scss';

const recentWorkDetails = [
    {
        id: 1,
        image: img1,
        title: 'Grand Hall',
        category: 'RESIDENTIAL',
        year: '2018',
    },
    {
        id: 2,
        image: img2,
        title: 'Green Hause',
        category: 'COMMERTIAL',
        year: '2020',
    },
    {
        id: 3,
        image: img3,
        title: 'Contemporary Villa',
        category: 'LANDSCAPE',
        year: '2010',
    },
];

function SingleWork() {
    return (
        <>
            <div className={style.singleWork}>
                <Image
                    src={workHeaderImg}
                    alt="workdetail-img"
                    className={style.singleWork_head_img}
                    height={480}
                />

                <div className={style.singleWork_main}>
                    <div className={style.singleWork_left}>
                        <h1>Grand Hall</h1>
                        <p>
                            Nulla porttitor accumsan tincidunt praesent sapien massa convallis
                            pellen tesque necp egestas non nisi vivamus suscipite nulla porttitor
                            accumsan tincidunt praesent sapien massa convallisa pellentesque.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti minus
                            atque nostrum veniam velit eveniet quam molestias. Quae sed repudiandae
                            aspernatur impedit porro maxime dolorum nulla quis veritatis tenetur
                            repellendus quas cum ut, ea molestiae reiciendis non officia velit
                            soluta placeat facilis ad nesciunt quibusdam facere. Temporibus id
                            eligendi commodi, hic asperiores earum dolor non! Obcaecati, nobis?
                            Animi atque quo, neque doloribus vero hic sed exercitationem, ea
                            veritatis esse eaque? Suscipit nesciunt dolorem asperiores modi maxime
                            quas accusamus ipsum voluptates
                        </p>

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
                            <p>John Abraham</p>
                        </div>
                        <div className={style.right_div}>
                            <h4>Date:</h4>
                            <p>05.04.2017</p>
                        </div>
                        <div className={style.right_div}>
                            <h4>Category:</h4>
                            <p>Residential</p>
                        </div>
                        <div className={style.right_div}>
                            <h4>Location:</h4>
                            <p>Savar, Dhaka</p>
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
                        {recentWorkDetails.map((items) => (
                            <RecentWorkCard key={items.id} item={items} />
                        ))}
                    </div>
                </div>
            </div>
            <FooterDetail />
        </>
    );
}

export default SingleWork;
