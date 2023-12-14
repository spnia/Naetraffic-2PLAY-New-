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

function TermsOfUse() {
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
                <h1>N2P 이용약관</h1>
                <dl>
                    <h2>0. 용어 정의</h2>
                    <dd>이용자: 본 홈페이지를 이용하며, N2P에서 공유되고 있는 모든 Add-On(이하 N2P Add-On)을 제공받아 사용하는 사람</dd>
                </dl>
                <dl>
                    <h2>1. 개요</h2>
                    <dd>본 약관은 Naetraffic 2PLAY(이하 N2P)의 이용과 관련해 이용자의 권리 및 이용자가 준수하여야 할 의무, 책임소재 등의 사항을 규정합니다.</dd>
                </dl>
                <dl>
                    <h2>2. 목적</h2>
                    <dd>N2P의 서비스를 이용하는 데 있어, 이용자의 권리, 의무 및 책임소재를 기재하여 운영 측과 이용자의 권익 보호를 목적으로 합니다.</dd>
                </dl>
                <dl>
                    <h2>3. 홈페이지 이용</h2>
                    <dd>A. 본 홈페이지에 사용된 모든 자료(폰트, 이미지 등)은 개별 저작권이 존재합니다. 이를 무단으로 추출, 사용 및 수정할 수 없습니다.</dd>
                    <dd>B. 본 홈페이지의 소스 코드를 참고용 외 무단으로 사용할 수 없습니다.</dd>
                    <dd>C. N2P는 전자 소프트웨어 중개 플랫폼으로, 소프트웨어 중개 이외의 그 어떠한 책임을 지지 않습니다.</dd>
                </dl>
                <dl>
                    <h2>4. Add-On 사용</h2>
                    <dd>A. N2P Add-On은 각 Add-On의 지원 목록에 표시된 게임에 구동하는 목적으로만 사용할 수 있습니다.</dd>
                    <dd>B. N2P Add-On은 원 저작자가 저작권을 보유합니다. 기본적으로 원 저작자의 동의 없는 무단 재배포 및 수정을 금지하고 있으나, 저작자가 별도로 표시한 경우 예외될 수 있습니다.</dd>
                    <dd>C. N2P Add-On을 영리적인 목적으로 사용할 수 없습니다.</dd>
                    <dd>D. N2P Add-On을 다운로드 하는 링크를 제공할 때, 파일의 절대 경로에 대한 링크가 아닌 각 Add-On의 개별 페이지의 링크를 제공하십시오.</dd>
                    <dd>E. N2P Add-On의 원형 및 변형본을 소지하고 있다면, 본 약관에 동의한 것으로 간주됩니다.</dd>
                </dl>
                <dl>
                    <h2>5. 약관 주의사항</h2>
                    <dd>A. 본 약관을 준수하지 않았을 경우 책임은 이용자에게 있습니다.</dd>
                    <dd>B. 본 약관은 언제든지 변경될 수 있으며, 약관의 유효 기간은 영구적입니다.</dd>
                    <dd>C. 이 외의 문의 사항은 전자메일 chco41432@gmail.com 으로 연락하시기 바랍니다.</dd>
                </dl>
            </ContentStyle>
        </React.Fragment>
    );
}

export default TermsOfUse;