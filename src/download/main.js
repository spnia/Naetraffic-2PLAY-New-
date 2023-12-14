import React, { useState, useEffect } from 'react';

import Header from './header/header';
import HeaderM from './header/header_m';
import Main from './main/main';
import MainM from './main/main_m';
import Footer from '../main/footer/footer';

function DownloadMain() {
    const [resized, setResized] = useState(window.visualViewport.width);

    useEffect(() => {
        const windowResize = () => {
            setResized(window.visualViewport.width);
        }

        windowResize();
        window.addEventListener(`resize`, windowResize);

        return () => {
            window.removeEventListener(`resize`, windowResize);
        }
    }, []);

    return (
        <React.Fragment>
            {resized > 768 && <Header resized={resized} />}
            {resized <= 768 && <HeaderM resized={resized} />}
            {resized > 768 && <Main resized={resized} />}
            {resized <= 768 && <MainM resized={resized} />}
            <Footer />
        </React.Fragment>
    )
}

export default DownloadMain;