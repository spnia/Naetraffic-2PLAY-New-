import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const AddonImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    height: 500px;
    width: 850px;
    object-fit: cover;
    z-index: -1;
`;

function TopImage() {
    const location = useLocation();
    const img = location.state.img;

    return (
        <AddonImage src={img} alt='프리뷰 이미지' />
    );
}

export default TopImage;