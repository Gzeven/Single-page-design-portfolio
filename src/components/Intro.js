import React from 'react';
import styled from 'styled-components';
import {
  GraphicDesign,
  UIUX,
  Apps,
  Illustrations,
  Photography,
  MotionGraphics,
} from '../assets/index';

const Intro = () => {
  return (
    <Wrapper>
      <div className="intro-text">
        <h1 className="heading-large">Design solutions made easy </h1>
        <p>
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.{' '}
        </p>
      </div>
      <div className="container">
        <div className="graphic-design grid-item">
          <img src={GraphicDesign} alt="" />
          <h4>Graphic Design</h4>
        </div>
        <div className="ui-ux grid-item">
          <img src={UIUX} alt="" />
          <h4>UI/UX</h4>
        </div>
        <div className="apps grid-item">
          <img src={Apps} alt="" />
          <h4>Apps</h4>
        </div>
        <div className="illustrations grid-item">
          <img src={Illustrations} alt="" />
          <h4>Ilustrations</h4>
        </div>
        <div className="photography grid-item">
          <img src={Photography} alt="" />
          <h4>Photography</h4>
        </div>
        <div className="motion-graphics grid-item">
          <img src={MotionGraphics} alt="" />
          <h4>Motion Graphics</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-inline: 1rem;
  text-align: center;

  .intro-text {
    margin-bottom: 2rem;
    h1 {
      margin-bottom: 1.688rem;
    }
    p {
      max-width: 45ch;
      margin: 0 auto;
    }
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 364px 182px 158px 182px 182px;
    gap: 24px 25px;

    grid-template-areas:
      'graphic-design graphic-design'
      'ui-ux apps'
      'illustrations illustrations'
      'photography photography'
      'motion-graphics motion-graphics';
    h4 {
      color: hsl(var(--clr-light-cream));
      font-size: 1.5rem;
      margin-bottom: 0;
      position: absolute;
      bottom: 1.5rem;
    }

    img {
      float: right;
    }
    .grid-item {
      padding: 1.5rem;
      position: relative;
      border-radius: 8px;
    }
  }

  .graphic-design {
    grid-area: graphic-design;
    background-color: hsl(var(--clr-galactic-blue));
  }
  .ui-ux {
    grid-area: ui-ux;
    background-color: hsl(var(--clr-summer-yellow));
  }
  .apps {
    grid-area: apps;
    background-color: hsl(var(--clr-pink));
  }
  .illustrations {
    grid-area: illustrations;
    background-color: hsl(var(--clr-light-red));
  }
  .photography {
    grid-area: photography;
    background-color: hsl(var(--clr-cyan));
  }
  .motion-graphics {
    grid-area: motion-graphics;
    background-color: hsl(var(--clr-dark-purple));
  }

  @media (min-width: 768px) {
    padding-inline: 2.438rem;

    .intro-text {
      margin: 0.313rem 0 4rem;

      h1 {
        margin-bottom: 1.813rem;
      }
      p {
        max-width: 45ch;
      }
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 182px 158px 182px;
      gap: 24px 24px;
      grid-template-areas:
        'graphic-design graphic-design ui-ux apps'
        'graphic-design graphic-design illustrations illustrations'
        'photography photography motion-graphics motion-graphics';
    }
  }

  @media (min-width: 1024px) {
    padding-inline: 0;

    .intro-text {
      margin: 0.125rem 0 4rem;

      h1 {
        margin-bottom: 1.813rem;
      }
      p {
        max-width: 55ch;
      }
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 182px 158px;
      gap: 24px 24px;
      grid-template-areas:
        'graphic-design graphic-design ui-ux apps photography photography'
        'graphic-design graphic-design illustrations illustrations motion-graphics motion-graphics';
    }
    max-width: var(--max-width);
    margin: 0 auto;
  }
`;

export default Intro;
