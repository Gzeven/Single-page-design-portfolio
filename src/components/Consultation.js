import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Logo } from '../assets/index';

const Consultation = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Button
        bgcolor="hsl(var(--clr-black))"
        hovercolor="hsl(var(--clr-galactic-blue))"
      >
        Free Consultation
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 2rem;
  .logo {
    img {
      height: 48px;
    }
  }

  @media (min-width: 768px) {
    padding: 2.125rem 2.438rem 3.688rem;
    .logo {
      img {
        height: 64px;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 2.125rem 0 4rem;
    max-width: var(--max-width);
    margin: 0 auto;
  }
`;

export default Consultation;
