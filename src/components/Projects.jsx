import React from 'react';
import { data } from '../Data'
import { ReturnButton, Root, Title, Grid } from './styledComponents';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom'
import { routeNames } from './shared';
import { Animated } from 'react-animated-css'

const AnimatedCard = ({ children, delay }) => <Animated animationInDelay={delay} animationIn="fadeInUp" animationInDuration={600} isVisible={true}>{children}</Animated>


const Projects = () => {
  const navigate = useNavigate()
  return (
    <Root >
      <Title>Projects</Title>
      <ReturnButton onClick={() => navigate(routeNames.HOME)} />
      <Grid>
        {data.map((d, index) => {
          return (
            <AnimatedCard key={index} delay={index * 250}>
              <ProjectCard data={d} />
            </AnimatedCard>
          )
        })}
      </Grid>
    </Root>
  );
};

export default Projects;
