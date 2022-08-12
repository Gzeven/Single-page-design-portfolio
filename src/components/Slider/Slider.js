import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import slides from '../slides';
import Track from './Track';
import Controls from './Controls';
import { useSwipeable } from 'react-swipeable';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(2);

  const slideWidth = window.innerWidth <= 1024 ? 72 : 37.5;
  // const slideWidth = 72;
  // useEffect(() => {}, [slideWidth]);

  const onPrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prevIndex) => prevIndex - 1);
    } else {
      setSlideIndex(slides.length - 1);
    }
  };

  const onNext = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((prevIndex) => prevIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setSlideIndex(slideIndex + 1),
    onSwipedRight: () => setSlideIndex(slideIndex - 1),
  });

  return (
    <Wrapper>
      <h1 className="heading-small">My Work</h1>
      <div className="slider">
        <Track {...{ slideIndex }} slideWidth={slideWidth}>
          <ul {...handlers}>
            {slides.map((slide, index) => {
              return (
                <li key={index}>
                  <img src={slide.img} alt={slide.alt}></img>
                </li>
              );
            })}
          </ul>
        </Track>
        <Controls prev={onPrev} next={onNext} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  /* max-width: 1440px;
  margin: 0 auto; */
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    transition: transform3d 2s;
    transform: translate3d(${(100 - 72) / 2}vw, 0, 0);
    /* max-width: 1440px; */

    li {
      min-width: 72vw;
      max-width: 72vw;
      padding-inline: 15px;

      img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        /* https: ; //www.youtube.com/watch?v=2n1VO_BIQRU */
        /* https: ; //dev.to/rakumairu/simple-react-carousel-24m */
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      margin-bottom: 3.5rem;
    }
  }

  @media (min-width: 1040px) {
    /* max-width: 1440px;
    margin: 0 auto; */
    ul {
      transform: translate3d(${(100 - 37.5) / 2}vw, 0, 0);

      li {
        min-width: 37.5vw;
        max-width: 37.5vw;
      }
    }
  }

  @media (min-width: 1440px) {
    /* margin: 0 auto;
    width: 1440px;

    ul {
      transform: translate3d(540px, 0, 0);
      width: 100%;

      li {
        min-width: 540px;
        max-width: 540px;
      }
    } */
  }
`;

export default Slider;
