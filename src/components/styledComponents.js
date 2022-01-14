import React from 'react';

import styled from 'styled-components';

export const titleColor = '#2A4268';
export const secondaryColor = '#A1B5D6';
const returnColor = '#afcbfa'
export const secondaryColorTransparent = 'rgba(161, 181, 214, .55)'
import BgPic from '../assets/backgroundPic.jpg';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Source Sans Pro', sans-serif;
  position: fixed;
  
  background-image: url('${BgPic}');
  filter: sepia(20%);
  
  background-repeat: no-repeat;
  background-size: cover;  
  color: ${titleColor}

`;

const UnderlinedText = styled.div`
  text-decoration: underline 0.1em rgba(0, 0, 0, 0);
  text-underline-offset: 0.1em;
  transition: text-decoration-color 300ms, text-underline-offset 300ms;

  &:hover {
    text-decoration-color: ${secondaryColor};
    text-underline-offset: 0.1em;
  }
`;

export const UnderlinedListItem = styled(UnderlinedText)`
  margin: 20px;
  padding: 0px;
  cursor: pointer;
  width: fit-content;
`;

const ReturnStyling = styled(UnderlinedText)`
  font-size: 40px;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: italic;
  position: fixed;
  top: 40px;
  left: 50px;
  color: ${returnColor}
`;

const StyledLeftArrow = styled.div`
  border-left: 6px solid;
  border-bottom: 6px solid;
  height: 12px;
  width: 12px;
  transform: rotate(45deg);
  margin-right: 0.5em;
`;

export const ReturnButton = ({ onClick }) => (
  <ReturnStyling onClick={onClick} >
    <StyledLeftArrow /> Return
  </ReturnStyling>
);

const ItalicText = styled.h1`
  font-style: italic;
  cursor: default;
  margin: 0px
`

export const Title = styled(ItalicText)`
  font-size: 110px;
`

export const SubTitle = styled(ItalicText)`
  font-size: 40px;
  margin-top: 0px
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 75vh;
  width: 95vw;
  column-gap: 2%;
  box-sizing: border-box;
  margin-top: 2%;
`

export const StyledCard = styled.div`
  // border-radius: 15px;
  height: 95%;
  width: 100%;

  display: grid;
  grid-template-rows: 0.5fr 2fr 4fr;
  align-items: center;
  background-color: ${secondaryColorTransparent};
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(255,255,255,.20) inset;
  padding: 5px 20px;

  &:hover {
    box-shadow: 0 10px 20px rgba(255,255,255,.40) inset;
  }
`
