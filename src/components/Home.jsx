import React from 'react';
import BgPic from '../assets/backgroundPic.jpg';
import { Root, UnderlinedListItem, Title, SubTitle, secondaryColor } from './styledComponents';
import { routeNames } from './shared';
import { useNavigate } from 'react-router-dom'
import { graphics } from '../Data';

const Home = () => {
  React.useEffect(() => {
    graphics.forEach((image) => (new Image().src = image));
    const bgImage = new Image();
    bgImage.src = BgPic
    window.bgImage = bgImage

  });
  const navigate = useNavigate()

  return (
    <Root >
      <Title style={{ marginTop: '12%' }}>Ted Chen</Title>
      <SubTitle>web developer</SubTitle>
      <div style={styles.selectionContainer}>
        <li style={styles.clickableContainer}>
          <UnderlinedListItem onClick={() => navigate(routeNames.PROJECTS)}>
            projects
          </UnderlinedListItem>

          <UnderlinedListItem onClick={() => navigate(routeNames.ABOUTME)}>
            about me
          </UnderlinedListItem>
        </li>
      </div>
    </Root>
  );
};

const styles = {
  selectionContainer: {
    height: '100%',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    bottom: '5%',
    fontSize: 50,
    color: secondaryColor,
  },
  clickableContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
};

export default Home;
