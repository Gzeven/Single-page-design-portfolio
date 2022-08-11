import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.bgcolor};
  color: hsl(28 100% 97%);
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 28px;
  height: 2.75rem;
  width: 11rem;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.6s;
  &:hover {
    background-color: ${(props) => props.hovercolor};
  }

  @media (min-width: 768px) {
    height: 3.5rem;
    width: 14.25rem;
  }
`;
