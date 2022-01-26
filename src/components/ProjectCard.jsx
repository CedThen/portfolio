import React from 'react';
import styled from 'styled-components';
import { StyledCard, size, device, StyledButton, textColor } from './styledComponents'



const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled(CenteredDiv)`
  height: 100%;
  font-size: 40px;
  font-weight: bold;
  padding: 10px;
  font-style: italic;

  @media ${device.mobileL} {
    font-size: 20px;
    padding: 5px; 
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 25px;
  }
`

const Graphic = styled.div`  
  // height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 3fr 1.5fr;
  height: 90%;
  // font-size: 22px;
  // font-style: italic;
  font-weight: bold;
  color: ${textColor};
`

const Item = styled(CenteredDiv)`
  font-size: 22px;
  @media ${device.mobileL} {
    font-size: 11px;
  }
  @media ${device.laptop}  {
    font-size: 15px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
`

const Img = styled.img`
  max-width: 325px;
  // max-height: 200px;
  src= ${(props) => props.src}

  @media ${device.mobileL} {
    max-width: 300px;
  }
  @media ${device.laptop} {
    max-width: 180px;
  }
  
`

const Link = ({ children, url }) => (<StyledButton href={url} target="_blank" rel="noreferrer noopener">{children}</StyledButton>)

const ProjectCard = ({ data }) => {

  return (
    <StyledCard >
      <Title>{data.title}</Title>
      <Graphic>
        <Img src={data.graphic} />
      </Graphic>
      <Content >
        <Item style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 }}>
          <Link url={data.github}>Github</Link>
          {data.link && <Item style={{ paddingLeft: '50px' }}><Link url={data.link}>Visit!</Link></Item>}
        </Item>
        <Item>
          {data.description && data.description}
          {data.description2 && <div><br />{data.description2}</div>}

        </Item>
        <div>
          <hr style={{
            borderTop: `3px solid ${textColor}`,
            width: '100%',
            height: '0px',
            marginTop: 10,
            marginBottom: 10
          }} />
          <Item >{data.stack}</Item>
        </div>
      </Content>
    </StyledCard>
  );
}

export default ProjectCard;
