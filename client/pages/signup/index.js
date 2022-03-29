/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import Input from '../../components/Input/Input';
import style from '../../styles/signup.module.scss';
// import { signIn } from "next-auth/react";

function Signup() {
    const [values, setValues] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
        confirmpass: '',
    });
    const [error, setError] = useState(false)
    const router = useRouter();

    const inputDetails = [
        {
            id: 1,
            label: 'Username',
            name: 'username',
            type: 'text',
            required: true,
            errMsg: 'Username should be 5-15 characters and should not include any special character!',
            pattern: '^[A-Za-z0-9]{5,15}$',
        },
        {
            id: 2,
            label: 'Full Name',
            name: 'fullname',
            type: 'text',
            required: true,
            errMsg: 'Full Name should not include any special character!',
        },
        {
            id: 3,
            label: 'Email',
            name: 'email',
            type: 'email',
            required: true,
            errMsg: 'Please provide a valid email address!',
        },
        {
            id: 4,
            label: 'Password',
            name: 'password',
            type: 'password',
            required: true,
            errMsg: 'Password should be 8-20 characters and include at last 1 letter, 1 number and 1 special character!',
            pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
        },
        {
            id: 5,
            label: 'Re-password',
            name: 'confirmpass',
            type: 'password',
            required: true,
            errMsg: 'Password does not matched!',
            pattern: values.password,
        },
    ];

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSub = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/auth/signup', {
                username: values.username,
                fullname: values.fullname,
                email: values.email,
                password: values.password,
            })
            // after user sign up successfully. redirect the user to login page
            router.push('/login');
        } catch (error) {
            setError(true)
            setValues({
                confirmpass: ''
            })
        }
    };

    // const handleAuth = async (e) => {
    //     try {
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div className={style.signup_page}>
            <div className={style.signup_page_main}>
                <div className={style.signup_page_left}>
                    <div className={style.left_logss}>
                        <div className={`${style.left_log} ${style.google}`}>
                            <FaGoogle className={style.icon} /> Google
                        </div>

                        <div className={`${style.left_log} ${style.facebook}`}>
                            <FaFacebook className={style.icon} /> Facebook
                        </div>

                        <div className={`${style.left_log} ${style.github}`} >
                            <FaGithub className={style.icon} /> Github
                        </div>
                    </div>
                </div>

                <div className={style.signup_page_center_h}>
                    <p>or</p>
                </div>
                <div className={style.signup_page_center_v}>
                    <p>or</p>
                </div>

                <div className={style.signup_page_right}>
                    <h1>Create An Account</h1>
                    <form onSubmit={handleSub}>
                        {inputDetails.map((inpDetail) => (
                            <Input
                                key={inpDetail.id}
                                {...inpDetail}
                                value={values[inpDetail.name]}
                                onChange={handleChange}
                            />
                        ))}

                        {error && <p style={{color: 'red', marginBottom: '0px'}}>Authentication failed!</p>}
                        <input type="submit" value="Sign In" className={style.submit_btn} />
                        <Link href="/login">
                            <a href="" className={style.login_link}>
                                Already have an account? Log in hare..
                            </a>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
