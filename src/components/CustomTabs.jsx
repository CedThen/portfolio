import React from 'react';
import styled from 'styled-components';

const primaryColor = '#333a38';
const secondaryColor = '#81817f';
export const StyledTabContainer = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100%;
`;
export const StyledTabb = styled.div`
  height: 5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  border-radius: 20px 20px 0px 0px;

  :hover {
    background-color: ${secondaryColor};
  }
`;

export const StyledTab = ({ title, logo, onClick, index, isSelected }) => {
  return (
    <StyledTabb
      onClick={() => onClick(index)}
      style={isSelected ? { backgroundColor: primaryColor } : {}}
    >
      {title}
    </StyledTabb>
  );
};
