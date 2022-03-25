/* eslint-disable import/no-unresolved */
import Image from 'next/image';
import React from 'react';
// import required modules
import { Autoplay, EffectFade, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import style from './header.module.scss';

function Header() {
    return (
        <div className={style.header_sec}>
            <Swiper
                spaceBetween={30}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation]}
                className={style.mySwiper}
                loop
            >
                <SwiperSlide className={style.slider_img}>
                    <Image alt="slider-img" src={slider1} />
                    <div className={style.slider_img_txt}>
                        <h1>
                            Modern House<span className={style.dot}>.</span>
                        </h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                        </p>
                        <button type="button" className={style.slider_img_btn}>
                            View Project
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slider_img}>
                    <Image alt="slider-img" src={slider2} />
                    <div className={style.slider_img_txt}>
                        <h1>
                            Horizon Urban<span className={style.dot}>.</span>
                        </h1>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia conse quuntur magni dolores eos qui ratione
                        </p>
                        <button type="button" className={style.slider_img_btn}>
                            View Project
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slider_img}>
                    <Image alt="slider-img" src={slider3} />
                    <div className={style.slider_img_txt}>
                        <h1>
                            Astralian Museum<span className={style.dot}>.</span>
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                            maxime eius earum qui rem. Fugit, officiis?
                        </p>
                        <button type="button" className={style.slider_img_btn}>
                            View Project
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Header;
