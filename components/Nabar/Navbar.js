/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import { Context } from '../../context/context';
import brand from '../../images/retool-icon.svg';
import style from './navbar.module.scss';

function Navbar() {
    const [toggler, setToggler] = useState(false);
    const { user, dispatch } = useContext(Context);

    const handleLogOut = () => {
        setToggler(false);
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <div className={style.navbar}>
            <Link href="/" passHref>
                <div className={style.nav_brand}>
                    <Image src={brand} alt="nav-logo" height={35} width={35} />
                    <p className={style.nav_brand_txt}>Architect</p>
                </div>
            </Link>

            <div className={style.nav_menu}>
                <Link href="/">
                    <a href="">Home</a>
                </Link>
                <Link href="/about">
                    <a href="">About</a>
                </Link>
                <Link href="/services">
                    <a href="">Services</a>
                </Link>
                <Link href="/works">
                    <a href="">Works</a>
                </Link>
                <Link href="/blog">
                    <a href="">Blogs</a>
                </Link>
            </div>

            <div className={style.nav_signup}>
                {user ? (
                    <button className={style.signup_btn} type="button" onClick={handleLogOut}>
                        Log Out
                    </button>
                ) : (
                    <Link href="/signup" passHref>
                        <button className={style.signup_btn} type="button">
                            Sign Up
                        </button>
                    </Link>
                )}
            </div>

            {toggler ? (
                <FaTimes className={style.toggle_btn} size={23} onClick={() => setToggler(false)} />
            ) : (
                <FaAlignRight
                    className={style.toggle_btn}
                    size={23}
                    onClick={() => setToggler(true)}
                />
            )}

            {toggler && (
                <div className={style.res_nav}>
                    <Link href="/">
                        <a href="" onClick={() => setToggler(false)}>
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a href="" onClick={() => setToggler(false)}>
                            About
                        </a>
                    </Link>
                    <Link href="/services">
                        <a href="" onClick={() => setToggler(false)}>
                            Services
                        </a>
                    </Link>
                    <Link href="/works">
                        <a href="" onClick={() => setToggler(false)}>
                            Works
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a href="" onClick={() => setToggler(false)}>
                            Blogs
                        </a>
                    </Link>

                    {user ? (
                        <button className={style.signup_btn} type="button" onClick={handleLogOut}>
                            Log Out
                        </button>
                    ) : (
                        <Link href="/signup" passHref>
                            <button
                                className={style.signup_btn}
                                type="button"
                                onClick={() => setToggler(false)}
                            >
                                Sign Up
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar;
