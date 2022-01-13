import React from 'react'
import { Root, Title, ReturnButton } from './styledComponents'
import { useNavigate } from 'react-router-dom'
import { routeNames } from './shared'
import styled from 'styled-components'
import { Document, Page, pdfjs } from 'react-pdf'
import Resume from '../assets/Resume2021.pdf'
import ProfPic from '../assets/profPic.jpg'
const titleColor = '#2A4268'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Img = styled.div`
  margin-top: 7%;
  display: inline-block;
  position: relative;
  border-radius: 60%;
  overflow: hidden;
  height: 230px;
  width: 230px;
`

const Content = styled.div`
  height: 45%;
  width: 75%;
  padding: 20px;
`

const AboutMeGrid = styled.div`
  height: 95%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  padding: 0px 20px;
  font-size: 30px;  
  font-weight: bold;
  // font-style: italic
`

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 50px 0px;
`

const Text = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`


const AboutMe = () => {
  const navigate = useNavigate()
  return (
    <Root>
      <Title>About Me</Title>
      <ReturnButton onClick={() => navigate(routeNames.HOME)} />
      <AboutMeGrid>
        <GridItem >
          <div style={{ boxShadow: `5px -2px 5px ${titleColor}` }}>
            <a href={Resume} target="_blank" rel="noreferrer noopener"> <Document file={Resume}><Page pageNumber={1} /></Document></a>
          </div>
        </GridItem>
        <GridItem>
          <Content >
            <Text>
              <br />
              Hi! Welcome to my portfolio.
              <br />
              <br />
              I&#39;m a full stack web developer with a passion for making things work. That moment when everything comes together and runs smoothly - that is why I climb mountains.
            </Text>
          </Content>
          <Img><img className='profPic' src={ProfPic} width={300} /></Img>
        </GridItem>
      </AboutMeGrid>
    </Root>)
}

export default AboutMe