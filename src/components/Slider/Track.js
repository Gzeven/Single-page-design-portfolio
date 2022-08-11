import React from 'react';
import styled from 'styled-components';

const StyledTrack = styled.div`
  transition: all 1s;
  transform: translate3d(${(p) => p.slideWidth * -p.slideIndex}vw, 0, 0);
  /* max-width: 1440px;
  margin: 0 auto; */
`;

const Track = (props) => {
  return <StyledTrack {...props}>{props.children}</StyledTrack>;
};

export default Track;
