import React from 'react';

import { Root, ReturnButton } from './styledComponents';
import { routeNames } from './shared';
import { useNavigate } from 'react-router-dom'

const Resume = () => {
  const navigate = useNavigate();
  return (
    <Root>
      <ReturnButton onClick={() => navigate(routeNames.HOME)} />
    </Root>
  );
};

export default Resume;
