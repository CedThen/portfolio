import React from 'react';
import styled from 'styled-components';
import { StyledCard, size, device } from './styledComponents'
const textColor = '#19273e'

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
`

const Graphic = styled(CenteredDiv)`  
  height: 100%;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 3fr 1.5fr;
  height: 90%;
  font-size: 22px;
  // font-style: italic;
  font-weight: bold;
  color: ${textColor};
`

const Item = styled(CenteredDiv)`

`

const Link = ({ children, url }) => (<a href={url} target="_blank" rel="noreferrer noopener">{children}</a>)

const ProjectCard = ({ data }) => {
  return (
    <StyledCard >
      <Title>{data.title}</Title>
      <Graphic>
        <img src={data.graphic} height="200px" />
      </Graphic>
      <Content >
        <Item style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
            height: '0px'
          }} />
          <Item style={{ fontSize: '20px' }}>{data.stack}</Item>
        </div>
      </Content>
    </StyledCard>
  );
}

export default ProjectCard;
