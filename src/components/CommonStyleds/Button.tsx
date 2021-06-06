import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const ButtonStyled = styled.button`
  min-width: 120px;
  height: 40px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.4px;
  text-align: center;
  user-select: none;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  background:#222328;
  color: white;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(.2, .8, .4, 1);
  transition-property: background-color, color, border-color, box-shadow;
  cursor: pointer;

  &:enabled {
    &:hover, &:focus {
      background: lighten(#222328, 5%);
      box-shadow: 0 2px 4px 0 rgba(#222328, 0.24);
    }

    &:active {
      background: darken(#222328, 5%);
      box-shadow: none;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #E6EBF4;
    color: #BDC0CF;
  }
  `


export default function Button({ children = 'Submit', className, ...rest }: ButtonProps) {
    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    );
}