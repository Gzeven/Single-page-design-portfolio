import React, { useState } from 'react';
import styled from 'styled-components';
import slides from '../slides';
import Track from './Track';
import Controls from './Controls';
import { useSwipeable } from 'react-swipeable';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(2);

  const slideWidth = window.innerWidth <= 1024 ? 72 : 37.5;

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
    onSwipedLeft: () => {
      if (slideIndex < slides.length - 1) {
        setSlideIndex((prevIndex) => prevIndex + 1);
      } else {
        setSlideIndex(0);
      }
    },
    onSwipedRight: () => {
      if (slideIndex > 0) {
        setSlideIndex((prevIndex) => prevIndex - 1);
      } else {
        setSlideIndex(slides.length - 1);
      }
    },
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

    li {
      min-width: 72vw;
      max-width: 72vw;
      padding-inline: 15px;

      img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      margin-bottom: 3.5rem;
    }
  }

  @media (min-width: 1040px) {
    ul {
      transform: translate3d(${(100 - 37.5) / 2}vw, 0, 0);

      li {
        min-width: 37.5vw;
        max-width: 37.5vw;
      }
    }
  }
`;

export default Slider;
