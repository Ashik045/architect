/* eslint-disable react/jsx-props-no-spreading */
import Navbar from '../components/Nabar/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
