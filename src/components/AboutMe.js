import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Amy } from '../assets/index';
import { textSlideRightAnimate } from '../utils/variants';

const AboutMe = () => {
  return (
    <Wrapper>
      <img src={Amy} alt="" />

      <motion.div
        className="aboutme-text"
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h2 className="heading-medium" variants={textSlideRightAnimate}>
          I’m Amy, and I’d love to work on your next project
        </motion.h2>
        <motion.p variants={textSlideRightAnimate}>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </motion.p>
        <Button
          bgcolor="hsl(var(--clr-light-red))"
          hovercolor="hsl(var(--clr-summer-yellow))"
        >
          Free Consultation
        </Button>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 6.25rem 0;
  text-align: center;
  padding-inline: 1rem;

  img {
    width: 300px;

    margin: 0 auto 2.5rem;
  }

  p {
    margin: 1.5rem auto;
  }

  @media (min-width: 768px) {
    margin: 7.5rem 0;
    padding-inline: 2.438rem;
    display: flex;
    justify-content: space-between;
    text-align: left;

    img {
      height: 364px;
      width: 364px;
      margin: 0 0 0 -5.188rem;
    }

    .aboutme-text {
      width: 45vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    p {
      max-width: 26ch;
      margin: 0;
    }
  }

  @media (min-width: 1024px) {
    max-width: var(--max-width);
    margin: 8.5rem auto 5.5rem;
    padding-inline: 0;
    max-width: var(--max-width);

    img {
      height: 445px;
      width: 445px;
      margin: 0;
    }

    .aboutme-text {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    p {
      max-width: 42ch;
      margin: 2.125rem 0 2rem;
    }
  }
`;

export default AboutMe;
