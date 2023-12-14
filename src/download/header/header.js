import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Headerr = styled.div`
    position: fixed;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    z-index: 2;
`;

export const HeaderTle = styled.div`
    width: 100vw;
    height: 100%;
`;

export const HeaderLogo = styled.img`
    position: absolute;
    height: 50px;
    left: 15%;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
        cursor: pointer;
    }
`;

export const Nav = styled.nav`
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
`;

export const Ul = styled.ul`
    list-style: none;
    margin-left: auto;
    display: flex;
`;

export const Li = styled.li`
    width: 150px;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;

function Header() {
    const navigate = useNavigate();
    const gotoLogo = () => {
        navigate(`../`, {});
        window.scrollTo(0, 0);
    };

    const gotoHeaderMenua = () => {
        const Element = document.getElementById('RouteMaps');
        if (Element) {
            const targetScroll = Element.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }
    };

    const gotoHeaderMenub = () => {
        const Element = document.getElementById('ReadMe');
        if (Element) {
            const targetScroll = Element.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }
    };

    const gotoHeaderMenuc = () => {
        const Element = document.getElementById('Downloads');
        if (Element) {
            const targetScroll = Element.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }
    };

    const location = useLocation();
    const addontype = location.state.addontype;

    return (
        <header>
            <Headerr>
                <HeaderTle>
                    <HeaderLogo onClick={gotoLogo} src="https://cdn.discordapp.com/attachments/1026042118457790466/1180120206346031174/noname.png?ex=657c4396&is=6569ce96&hm=21f766bd4b84e3e64020b646029d7d2b8a3552e6f5c42aceac4d9f48dcf3de0c&" alt="로고이미지" />
                    <Nav>
                        <Ul>
                            {addontype === "Route" && (
                                <Li onClick={gotoHeaderMenua}>노선도</Li>
                            )}
                            <Li onClick={gotoHeaderMenub}>리드미</Li>
                            <Li onClick={gotoHeaderMenuc}>다운로드</Li>
                        </Ul>
                    </Nav>
                </HeaderTle>
            </Headerr>
        </header>
    );
};

export default Header;