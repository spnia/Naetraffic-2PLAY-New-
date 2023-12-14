import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Resize() {
    const Ratio = 16 / 9;
    const height = window.innerWidth / Ratio;
    const result = height * 0.1 + window.innerWidth * 1.075;

    return result;
}

export const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -3;
    }
`;

export const Title = styled.div`
    text-align: center;
    font-size: 50px;
    font-weight: 900;
`;

export const Content = styled.div`
    text-align: center;
    font-size: 20px;
`;

export const RouteMaps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #171717;
`;

export const RouteMapTitle = styled.div`
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    padding-top: 50px;
    color: #fff;
`;

export const RouteMapSub = styled.div`
    text-align: center;
    color: #fff;
`;

export const RouteMap = styled.img`
    width: 100%;
`;

export const ReadMe = styled.div`
    background-color: #e9ecef;
    padding-bottom: 50px;
`;

export const ReadMeContent = styled.div`
    color: #000;
    white-space: pre-wrap;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 50px;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
`;

export const Downloads = styled.div`
    background-color: #fff;
`;

export const DownloadTitle = styled.div`
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    padding-top: 50px;
    color: #000;
`;

export const DownloadSub = styled.div`
    text-align: center;
    color: #000;
`;

export const AddonImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MoniterImage = styled.img`
    width: 60%;
    margin-top: 3%;
    z-index: 1;
`;

export const AddonImage = styled.img`
    position: absolute;
    width: 50%;
    height: ${(props) => props.resized}px;
    margin-top: 3%;
    object-fit: cover;
    z-index: 0;
    border-radius: 10%;
`;

export const Cl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CompanyLogo = styled.img`
    height: 40px;
`;

export const AddonTitle = styled.div`
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    margin-top: 15px;
    color: #000;
`;

export const AddonSub = styled.div`
    text-align: center;
    font-size: 15px;
    color: #000;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const DownloadButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    background-color: #171717;
    color: #fff;
    border-radius: 10px;
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    transition: .25s all;

    &:hover {
        background-color: #505050; 
        cursor: pointer;
    }
`;

export const Noti = styled.div`
    text-align: center;
    color: #000;
    font-weight: 900;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
`;

export const NoShared = styled.div`
    text-align: center;
    color: #505050;
    font-weight: 900;
`;

function MainM() {
    const [resized, setResized] = useState(Resize());

    useEffect(() => {
        const windowResize = () => {
            setResized(Resize());
        }

        windowResize();
        window.addEventListener(`resize`, windowResize);

        return () => {
            window.removeEventListener(`resize`, windowResize);
        }
    }, []);

    const location = useLocation();
    const addontype = location.state.addontype;
    const img = location.state.img;
    const bgvideo = location.state.bgvideo;
    const companylogo = location.state.companylogo;
    const title = location.state.title;
    const content = location.state.content;
    const routemap = location.state.routemap;
    const openbveAddon = location.state.openbveAddon;
    const hmmsim1Addon = location.state.hmmsim1Addon;
    const hmmsim2Addon = location.state.hmmsim2Addon;
    const sharedstate = location.state.sharedstate;
    const readme = location.state.readme;
    const obdownloadlink = location.state.obdownloadlink;
    const hm1downloadlink = location.state.hm1downloadlink;
    const hm2downloadlink = location.state.hm2downloadlink;

    const ObDownloadBtn = () => {
        window.location.href = (obdownloadlink);
    }

    const Hm1DownloadBtn = () => {
        window.location.href = (hm1downloadlink);
    }

    const Hm2DownloadBtn = () => {
        window.location.href = (hm2downloadlink);
    }

    return (
        <main>
            <Top>
                <video autoPlay muted loop>
                    <source src={bgvideo} type='video/mp4' />
                </video>
            </Top>
            {addontype === "Route" && (
                <RouteMaps id='RouteMaps'>
                    <RouteMapTitle>노선도</RouteMapTitle>
                    <RouteMapSub>Add-On의 노선도 입니다</RouteMapSub>
                    <RouteMap src={routemap} alt='노선도 이미지' />
                </RouteMaps>
            )}
            <ReadMe id='ReadMe'>
                <DownloadTitle>리드미</DownloadTitle>
                <DownloadSub>반드시 읽어주세요</DownloadSub>
                <ReadMeContent>{readme}</ReadMeContent>
            </ReadMe>
            <Downloads id='Downloads'>
                <DownloadTitle>다운로드</DownloadTitle>
                <DownloadSub>이제는 즐길 때 입니다</DownloadSub>
                <AddonImages>
                    <MoniterImage src='https://cdn.discordapp.com/attachments/1026042118457790466/1181239965145899149/phone.png?ex=65805672&is=656de172&hm=c8654ed5ca863f2bbc565f9744cb24f4d1d28b639c4b60037bdc1b17caaf4ea1&' />
                    <AddonImage resized={resized} src={img} alt='프리뷰 이미지' />
                </AddonImages>
                { /* <Cl>
                <CompanyLogo src={companylogo} alt='회사 로고 이미지' />
            </Cl> */ }
                <AddonTitle>{title}</AddonTitle>
                <AddonSub>{content}</AddonSub>
                <Buttons>
                    {openbveAddon === true && (
                        <DownloadButtons onClick={ObDownloadBtn}>openBVE용 다운로드</DownloadButtons>
                    )}
                    {hmmsim1Addon === true && (
                        <DownloadButtons onClick={Hm1DownloadBtn}>Hmmsim 1용 다운로드</DownloadButtons>
                    )}
                    {hmmsim2Addon === true && (
                        <DownloadButtons onClick={Hm2DownloadBtn}>Hmmsim 2용 다운로드</DownloadButtons>
                    )}
                    {sharedstate === false && (
                        <NoShared>조금만 기다려 주세요!</NoShared>
                    )}
                </Buttons>
                <Noti>다운로드 전, 반드시 아래의 저작권 및 이용약관을 확인하시기 바랍니다</Noti>
            </Downloads>
        </main>
    );
}

export default MainM;