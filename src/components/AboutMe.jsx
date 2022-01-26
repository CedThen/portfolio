import React from 'react'
import { Root, Title, ReturnButton, device } from './styledComponents'
import { useNavigate } from 'react-router-dom'
import { routeNames } from './shared'
import styled from 'styled-components'
import { Document, Page, pdfjs } from 'react-pdf'
import Resume from '../assets/Resume2021.pdf'
import ProfPic from '../assets/profPic.jpg'
import { useMediaQuery } from 'react-responsive'
const titleColor = '#2A4268'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Img = styled.div`
  margin-top: 7%;
  display: inline-block;
  position: relative;
  border-radius: 60%;
  border: 1px black solid;
  
  overflow: hidden;
  height: 230px;
  width: 230px;
`

const Content = styled.div`
  height: 45%;
  width: 75%;
  padding: 20px;
`

const Container = styled.div`
  height: 95%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  box-sizing: border-box;
  padding: 0px 20px;
  font-size: 30px;  
  font-weight: bold;
  
  @media ${device.mobileL} {
    display: block
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 50px 0px;
  width: auto;
  @media ${device.mobileL} {
    display: block
  }
`

const Text = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Pdf = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px -2px 5px ${titleColor}
  // margin-left: 15%;
  width: auto;

  @media ${device.mobileL} {
    width: 300px;
    margin-left: 0;
  }

  @media ${device.laptop} {
    width: 500px;
  }
`

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ query: `(max-width: 425px)` })
  const isLaptop = useMediaQuery({ query: `(max-width: 1024px)` })
  const pageWidth = isMobile ? 300 : isLaptop ? 500 : 560
  return (
    <Root>
      <Title>About Me</Title>
      <ReturnButton onClick={() => navigate(routeNames.HOME)} />
      <Container>
        <Pdf>
          <a href={Resume} target="_blank" rel="noreferrer noopener" style={{ hidden: isLoaded }}>
            <Document file={Resume} onLoadSuccess={() => setIsLoaded(true)}>
              <Page width={pageWidth} pageNumber={1} />
            </Document>
          </a>
        </Pdf>

        <Item >
          <Content >
            <Text>
              {!isMobile && !isLaptop && <br />}
              Hi! Welcome to my portfolio.
              <br />
              <br />
              I&#39;m a full stack web developer with a passion for <span style={{ color: 'white' }}>making things work</span>. That moment when everything comes together and runs smoothly - that is why I climb mountains.
            </Text>
          </Content>
          <Img><img className='profPic' src={ProfPic} width={300} /></Img>
        </Item>
      </Container>
    </Root>)
}

export default AboutMe