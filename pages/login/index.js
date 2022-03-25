/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import Input from '../../components/Input/Input';
import { Context } from '../../context/context';
import style from '../../styles/login.module.scss';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false);
    const { dispatch, isFetching } = useContext(Context);

    const router = useRouter();

    const inputDetails = [
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
            errMsg: 'This field is required!',
        },
    ];

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: '280px',
        padding: '0.45rem',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/auth/login', {
                email: values.email,
                password: values.password,
            });
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.message[0] });
            console.log(res.data.message);

            // after user log in successfully. Show a success msg & redirect the user to login page
            router.push('/');
            Toast.fire({
                icon: 'success',
                title: 'Log in successfully',
            });

            setValues({
                email: '',
                password: '',
            });
        } catch {
            setError(true);
            dispatch({ type: 'LOGIN_FAILURE' });
            setValues({
                password: '',
            });
        }
    };

    return (
        <div className={style.login_page}>
            <div className={style.login_page_main}>
                <h1>Login Hare</h1>
                <form onSubmit={handleSubmit}>
                    {inputDetails.map((inpDetail) => (
                        <Input
                            key={inpDetail.id}
                            {...inpDetail}
                            value={values[inpDetail.name]}
                            onChange={handleChange}
                        />
                    ))}

                    {error && (
                        <p style={{ color: 'red', marginBottom: '-7px' }}>Authentication failed!</p>
                    )}
                    <input
                        type="submit"
                        value="Log In"
                        className={style.submit_btn}
                        disabled={isFetching}
                    />
                    <Link href="/signup">
                        <a href="" className={style.login_link}>
                            Don&apos;t have an account? Sign in hare..
                        </a>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
