import React, { useState, useEffect } from 'react';

import Header from './header/header';
import HeaderM from './header/header_m';
import Mains from './main/main';
import Footer from './footer/footer';

function Main() {
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
            <Mains />
            <Footer />
        </React.Fragment>
    );
};

export default Main;