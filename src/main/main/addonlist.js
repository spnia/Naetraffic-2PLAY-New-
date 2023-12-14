import styled from 'styled-components';

export const Addons = styled.article`
  height: 325px;
  box-shadow: 0px 10px 20px #909090;
  background-color: #fff;
  border-radius: 20px;
  transition: .1s all;

  &:hover {
    background-color: #303030;
    color: #fff;
    cursor: pointer;
  }
`;

export const AddonsInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const AddonsImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
`;

export const AddonsTitle = styled.div`
  font-size: 27.5px;
  font-weight: 900;
`;

export const OpenbveTrue = styled.div`
  display: inline-block;
  background-color: #303030;
  padding: 3px;
  color: #fff;
  border-radius: 5px;
  margin-right: 3px;
  font-size: 12.5px;
`;

export const Hmmsim1True = styled.div`
  display: inline-block;
  background-color: #707070;
  padding: 3px;
  color: #fff;
  border-radius: 5px;
  margin-right: 3px;
  font-size: 12.5px;
`;

export const Hmmsim2True = styled.div`
  display: inline-block;
  background-color: #505050;
  padding: 3px;
  color: #fff;
  border-radius: 5px;
  margin-right: 3px;
  font-size: 12.5px;
`;

export const SharedStateTrue = styled.div`
  display: inline-block;
  background-color: #ff0000;
  padding: 3px;
  color: #fff;
  border-radius: 5px;
  margin-right: 3px;
  font-size: 12.5px;
`;

export const SupportGame = styled.div`
  margin-top: 15px;
  align-self: flex-end;
`;

function AddonList({ img, title, content, openbveAddon, hmmsim1Addon, hmmsim2Addon, sharedstate }) {
  return (
    <Addons>
      <AddonsImg src={img} alt="애드온 이미지" />
      <AddonsInfo>
        <AddonsTitle className="addonslist">{title}</AddonsTitle>
        <div id="addons_content" className="addonslist">{content}</div>
        <SupportGame>
          {openbveAddon && <OpenbveTrue>openBVE</OpenbveTrue>}
          {hmmsim1Addon && <Hmmsim1True>Hmmsim 1</Hmmsim1True>}
          {hmmsim2Addon && <Hmmsim2True>Hmmsim 2</Hmmsim2True>}
          {!sharedstate && <SharedStateTrue>SOLD OUT!</SharedStateTrue>}
        </SupportGame>
      </AddonsInfo>
    </Addons>
  );
}

export default AddonList;