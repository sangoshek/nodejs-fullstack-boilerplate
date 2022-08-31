import React, { FC } from 'react';
import { AppProps } from 'next/app';
import LayoutMain from '../components/Layouts/LayoutMain';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
        <LayoutMain>
            <Component {...pageProps} />
        </LayoutMain>
        </>
    )    
};

export default App;