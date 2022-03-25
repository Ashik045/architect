/* eslint-disable react/jsx-props-no-spreading */
import Navbar from '../components/Nabar/Navbar';
import { ContextProvider } from '../context/context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Navbar />
            <Component {...pageProps} />
        </ContextProvider>
    );
}

export default MyApp;
