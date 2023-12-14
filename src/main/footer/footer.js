import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const FooterTle = styled.div`
    width: 100%;
    height: 300px;
    background-color: #171717;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const SurList = styled.div`
    display: flex;
`;

export const Terms = styled.div`
    color: #505050;
    margin-left: 15%;
    margin-bottom: 30px;
`;

export const SurTitle = styled.div`
    color: #fff;
    font-size: 22.5px;
    font-weight: 900;
    margin-bottom: 10px;
`;

export const SurContent = styled.div`
    color: #505050;
    font-size: 17.5px;
    line-height: 25px;
    transition: .1s all;

    &:hover {
        cursor: pointer;
        color: #707070;
    }
`;

export const Company = styled.div`
    color: #505050;
    margin-left: 15%;
    font-weight: 500;
    font-size: 20px;
`;

export const Service = styled.div`
    color: #505050;
    margin-left: 5%;
    margin-bottom: 30px;
`;

export const CompanyName = styled.div`
`;

export const DevName = styled.div`
`;

function Footer() {
    const navigate = useNavigate();

    const gotoOfUse = () => {
        navigate('/docs/termsofuse');
        window.scrollTo(0, 0);
    }

    const gotoOfShare = () => {
        navigate('/docs/termsofshare');
        window.scrollTo(0, 0);
    }

    return (
        <footer>
            <FooterTle>
                <SurList>
                    <Terms>
                        <SurTitle>약관</SurTitle>
                        <SurContent><div onClick={gotoOfUse}>이용약관</div></SurContent>
                        <SurContent><div onClick={gotoOfShare}>제공약관</div></SurContent>
                    </Terms>
                    <Service>
                        <SurTitle>서비스</SurTitle>
                        <SurContent><div target="_blank" onClick={() => {window.location.href = 'https://naetawiki.kro.kr'}}>내타위키</div></SurContent>
                        <SurContent></SurContent>
                    </Service>
                </SurList>
                <Company>
                    <CompanyName>Operater | 내트래픽</CompanyName>
                    <DevName>Developer | 새하래</DevName>
                </Company>
            </FooterTle>
        </footer>
    );
}

export default Footer;