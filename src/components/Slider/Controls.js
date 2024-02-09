import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from '../../assets/index';

const Controls = (props) => {
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') props.prev();
    if (e.key === 'ArrowRight') props.next();
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <Wrapper {...props}>
      <button onClick={props.prev} aria-label="Previous">
        <img src={ArrowLeft} alt="" />
      </button>
      <button onClick={props.next} aria-label="Next">
        <img src={ArrowRight} alt="" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  pointer-events: none;
  button {
    background-color: hsl(var(--clr-black));
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin: 2rem 0.5rem 0;
    pointer-events: auto;
    border: none;
    transition: all ease 0.6s;
    cursor: pointer;
    @media (hover: hover) and (pointer: fine) {
      :hover {
        background-color: hsl(var(--clr-galactic-blue));
      }
    }

    img {
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    button {
      margin: 3.5rem 0.5rem 0;
    }
  }
`;

export default Controls;
