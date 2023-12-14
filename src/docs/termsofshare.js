import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ContentStyle = styled.div`
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

function TermsOfShare() {
    useEffect(() => {
        document.body.style.backgroundColor = '#171717';
        document.body.style.color = '#fff';

        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, []);

    return (
        <React.Fragment>
            <ContentStyle>
                <h1>N2P 제공약관</h1>
                <dl>
                    <h2>0. 용어 정의</h2>
                    <dd>제공자: Naetraffic 2PLAY(이하 N2P)에서 제공되는 Add-On의 원 저작자</dd>
                </dl>
                <dl>
                    <h2>1. 개요</h2>
                    <dd>본 약관은 Naetraffic 2PLAY(이하 N2P)의 이용과 관련해 제공자가 Add-On을 제공할 때 준수해야 하는 의무에 대해 서술합니다.</dd>
                </dl>
                <dl>
                    <h2>2. 목적</h2>
                    <dd>N2P에 Add-On을 제공하면서, 이용자가 혼동할 수 있는 요소를 배제하는 것에 목적이 있습니다.</dd>
                </dl>
                <dl>
                    <h2>3. Add-On 제공</h2>
                    <dd>A. 제공자는 N2P에 Add-On을 제공할 시, 저작권자 및 이용 라이선스를 기재하여야 합니다.</dd>
                    <dd>B. 제공자는 N2P에 Add-On을 제공할 시, 허위의 내용을 기재할 수 없습니다.</dd>
                </dl>
                <dl>
                    <h2>4. 약관 주의사항</h2>
                    <dd>A. 본 약관을 준수하지 않았을 경우 책임은 제공자에게 있습니다.</dd>
                    <dd>B. 본 약관은 언제든지 변경될 수 있으며, 약관의 유효 기간은 영구적입니다.</dd>
                    <dd>C. 이 외의 문의 사항은 전자메일 chco41432@gmail.com 으로 연락하시기 바랍니다.</dd>
                </dl>
            </ContentStyle>
        </React.Fragment>
    );
}

export default TermsOfShare;