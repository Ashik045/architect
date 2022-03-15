import Image from 'next/image';
import React from 'react';
import rithtImg from '../../images/experienceImg.jpg';
import icon2 from '../../images/service-icon-2.png';
import icon5 from '../../images/service-icon-5.png';
import icon6 from '../../images/service-icon-6.png';
import style from './experience.module.scss';

function Experience() {
    return (
        <div className={style.experience_sec}>
            <div className={style.left}>
                <h1>
                    20 years of <br /> Experience
                </h1>

                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae
                </p>

                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit.
                </p>

                <div className={style.experience_icons}>
                    <div className={style.experience_icon}>
                        <Image src={icon5} alt="experience-icon" />
                        <h4>Architecture</h4>
                    </div>
                    <div className={style.experience_icon}>
                        <Image src={icon2} alt="experience-icon" />
                        <h4>Interior Design</h4>
                    </div>
                    <div className={style.experience_icon}>
                        <Image src={icon6} alt="experience-icon" />
                        <h4>Construction</h4>
                    </div>
                </div>
            </div>

            <div className={style.right}>
                <Image src={rithtImg} alt="experience-img" />
            </div>
        </div>
    );
}

export default Experience;
