import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from './Button';
import {
  textSlideLeftAnimate,
  textSlideRightAnimate,
  textSlideUpAnimate,
  textSlideDownAnimate,
  textPopUpAnimate,
  imageAnimate,
} from '../utils/variants';

const BookMe = () => {
  return (
    <Wrapper>
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1 variants={textSlideRightAnimate}>
          Book a call with me
        </motion.h1>
        <motion.p variants={textSlideRightAnimate}>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.{' '}
        </motion.p>
      </motion.div>
      <Button
        bgcolor="hsl(var(--clr-light-red))"
        hovercolor="hsl(var(--clr-summer-yellow))"
      >
        Free Consultation
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: hsl(var(--clr-black));
  text-align: center;
  margin: 6.25rem 1rem 1.5rem;
  padding: 3.031rem 1.5rem;

  border-radius: 10px;
  h1 {
    color: hsl(var(--clr-light-cream));
  }
  p {
    color: hsl(var(--clr-light-cream));
    margin: 1.5rem auto;
    max-width: 42ch;
  }

  @media (min-width: 768px) {
    p {
      margin: 1.625rem auto;
    }
  }

  @media (min-width: 1024px) {
    margin: 6.25rem auto 1.375rem;
    max-width: var(--max-width);
    padding-inline: 4.063rem;
    gap: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export default BookMe;
