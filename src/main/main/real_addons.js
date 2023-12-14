import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Addonlist from './addonlist';
import { real_addons } from '../../addondata/realad_data';

export const MainRealaddon = styled.div`
    display: flex;
    justify-content: center;
    background-color: #e9ecef;
`;

export const MainRealaddonS = styled.div``;

export const MainRealaddonTitle = styled.div`
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    padding-top: 50px;
`;

export const MainRealaddonSub = styled.div`
    margin-bottom: 50px;
    text-align: center;
`;

export const MainRealaddonList = styled.div`
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

export const MainRealaddonListM = styled.div`
    display: grid;
    grid-gap: 70px;
    grid-template-columns: repeat(1, 350px);
    padding-bottom: 50px;
`;

function Realaddons() {
    const navigate = useNavigate();
    const goto = (addonlist) => {
        navigate(`/real_addon/${addonlist.id}`, {
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
        <MainRealaddon id='RealAddons'>
            <MainRealaddonS>
                <MainRealaddonTitle>실제 Add-On</MainRealaddonTitle>
                <MainRealaddonSub>N2P에서 제공하는 실제 Add-On 입니다.</MainRealaddonSub>
                {resized > 768 &&
                    <MainRealaddonList>
                        {real_addons.map((addonlist) => (
                            <div key={addonlist.id} onClick={() => goto(addonlist)}>
                                <Addonlist {...addonlist} />
                            </div>
                        ))}
                    </MainRealaddonList>
                }
                {resized <= 768 &&
                    <MainRealaddonListM>
                        {real_addons.map((addonlist) => (
                            <div key={addonlist.id} onClick={() => goto(addonlist)}>
                                <Addonlist {...addonlist} />
                            </div>
                        ))}
                    </MainRealaddonListM>
                }
            </MainRealaddonS>
        </MainRealaddon>
    );
};

export default Realaddons;