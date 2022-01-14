import React from 'react';

import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
export const titleColor = '#2A4268';
export const secondaryColor = '#A1B5D6';
const returnColor = '#afcbfa'
export const secondaryColorTransparent = 'rgba(161, 181, 214, .55)'
import BgPic from '../assets/backgroundPic.jpg';

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  
  font-family: 'Source Sans Pro', sans-serif;
  // position: fixed;
  
  background-image: url('${BgPic}');
  background-repeat: no-repeat;
  background-size: cover;  
  background-color: black;
  filter: sepia(20%);
  color: ${titleColor}

  // @media ${device.desktop} {
  //   position: fixed;
  // }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 80%;
  width: 95%;
  column-gap: 2%;
  box-sizing: border-box;
  margin-top: 2%;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`

export const StyledCard = styled.div`
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

  @media ${device.mobileL} {
    max-width: 400px;
  }
  @media ${device.laptop} {
    max-width: 225px;    
  }
  @media ${device.laptopL} {
    max-width: 300px;    
  }
`

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

  @media ${device.mobileL} {
    font-size: 20px;
    top: 10px;
    left: 10px;
    color: ${returnColor}
  }
  @media ${device.laptop} {
    font-size: 25px;
    color: ${returnColor}
  }
  @media ${device.laptopL} {
    font-size: 30px;
    color: ${returnColor}
  }
  @media ${device.desktop} {    
    color: ${returnColor}
  }
  @media ${device.desktopL} {    
    color: ${returnColor}
  }
`;

const StyledLeftArrow = styled.div`
  border-left: 6px solid;
  border-bottom: 6px solid;
  height: 12px;
  width: 12px;
  transform: rotate(45deg);
  margin-right: 0.5em;
`;

export const ReturnButton = ({ onClick }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  return (
    <ReturnStyling onClick={onClick} >
      <StyledLeftArrow /> {!isMobile && "Return"}
    </ReturnStyling>
  );
}

const ItalicText = styled.h1`
  font-style: italic;
  cursor: default;
  margin: 0px
`

export const Title = styled(ItalicText)`
  font-size: 110px;
  @media ${device.mobileL} {
    font-size: 80px;    
  }
`

export const SubTitle = styled(ItalicText)`
  font-size: 40px;
  margin-top: 0px
`