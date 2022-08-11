import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({ children, width }) => {
  return (
    <Wrapper className="carousel-item" style={{ width: width }}>
      {children}
    </Wrapper>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <Wrapper
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...handlers}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '270px' });
        })}
      </div>
      <div className="indicators">
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .carousel {
    /* overflow: hidden;
    background-color: red;
    position: relative; */
  }

  .inner {
    /* white-space: nowrap;
    transition: transform 0.3s; */
  }

  .carousel-item {
    /* position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: green;
    color: white; */
    /* background: ${(props) =>
      `url(${props.background}) no-repeat top center`}; */
  }

  .indicators {
    display: flex;
    justify-content: space-between;

    > button {
      margin: 5px;
    }
  }
`;

export default Carousel;
