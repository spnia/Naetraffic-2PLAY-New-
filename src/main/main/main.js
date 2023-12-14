import React, { useState, useEffect } from 'react';
import Ntaddons from './nt_addons';
import Realaddons from './real_addons';
import styled from 'styled-components';

export const MainBanner = styled.div`
    background-image: url('https://cdn.discordapp.com/attachments/1026042118457790466/1177641822990905404/image.png?ex=65733f6a&is=6560ca6a&hm=b20dfdf75cb6e434c2d6d3172703cbb2499427abb4a53fb25826d9175d882af5&');
    background-size: cover;
    background-position: center;
    height: 100vh;
`;

export const MainBannerText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    text-align: center;
`;

export const MainBannerTitle = styled.div`
    font-size: 75px;
    font-weight: 900;
    width: 90vw;
`;

export const MainBannerTitleM = styled.div`
    font-size: 30px;
    font-weight: 900;
    width: 90vw;
`;

function Mains() {
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
        <main>
            <MainBanner>
                <MainBannerText>
                {resized > 768 && <MainBannerTitle>만듭니다.<br />우리들의 생각을.</MainBannerTitle> }
                {resized <= 768 && <MainBannerTitleM>만듭니다.<br />우리들의 생각을.</MainBannerTitleM> }
                </MainBannerText>
            </MainBanner>
            <Ntaddons />
            <Realaddons />
        </main>
    );
};

export default Mains;