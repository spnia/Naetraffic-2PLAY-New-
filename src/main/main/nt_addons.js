import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Addonlist from './addonlist';
import { addons } from '../../addondata/data';

export const MainNtaddon = styled.div`
    display: flex;
    justify-content: center;
`;

export const MainNtaddonS = styled.div``;

export const MainNtaddonTitle = styled.div`
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    padding-top: 50px;
`;

export const MainNtaddonSub = styled.div`
    margin-bottom: 50px;
    text-align: center;
`;

export const MainNtaddonList = styled.div`
    display: grid;
    grid-gap: 70px;
    grid-template-columns: repeat(3, 400px);
    padding-bottom: 50px;
    
    @media (max-width: 1356px) {
        grid-template-columns: repeat(2, 400px);
    }

    @media (max-width: 886px) {
        grid-template-columns: repeat(1, 400px);
    }
`;

export const MainNtaddonListM = styled.div`
    display: grid;
    grid-gap: 70px;
    grid-template-columns: repeat(1, 350px);
    padding-bottom: 50px;
`;

function Ntaddons() {
    const navigate = useNavigate();
    const goto = (addonlist) => {
        navigate(`/nt_addon/${addonlist.id}`, {
            state: {
                addontype: addonlist.addontype,
                img: addonlist.img,
                bgvideo: addonlist.bgvideo,
                companylogo: addonlist.companylogo,
                title: addonlist.title,
                content: addonlist.content,
                routemap: addonlist.routemap,
                openbveAddon: addonlist.openbveAddon,
                hmmsim1Addon: addonlist.hmmsim1Addon,
                hmmsim2Addon: addonlist.hmmsim2Addon,
                sharedstate: addonlist.sharedstate,
                readme: addonlist.readme,
                obdownloadlink: addonlist.obdownloadlink,
                hm1downloadlink: addonlist.hm1downloadlink,
                hm2downloadlink: addonlist.hm2downloadlink
            }
        });
        window.scrollTo(0, 0);
    };

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
        <MainNtaddon id='NtAddons' >
            <MainNtaddonS>
                <MainNtaddonTitle>내트래픽 Add-On</MainNtaddonTitle>
                <MainNtaddonSub>다양한 내트래픽의 가상 Add-On 입니다.</MainNtaddonSub>
                {resized > 768 &&
                    <MainNtaddonList>
                        {addons.map((addonlist) => (
                            <div key={addonlist.id} onClick={() => goto(addonlist)}>
                                <Addonlist {...addonlist} />
                            </div>
                        ))}
                    </MainNtaddonList>
                }
                {resized <= 768 &&
                    <MainNtaddonListM>
                        {addons.map((addonlist) => (
                            <div key={addonlist.id} onClick={() => goto(addonlist)}>
                                <Addonlist {...addonlist} />
                            </div>
                        ))}
                    </MainNtaddonListM>
                }
            </MainNtaddonS>
        </MainNtaddon>
    );
};

export default Ntaddons;