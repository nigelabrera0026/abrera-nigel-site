/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/

import styled, { css } from 'styled-components';
import { ImageProps } from './Image.types';

const ImageComponent = styled.img<ImageProps>`
  display: block;
  border: 0 solid white;
  border-radius: 10%;

  ${({ size }) => size === 'mobile' ? css`
    width: 55px;
    height: 65px;

  ` : css`
    width: 120px;
    height: 135px;

  `};

  ${({ disabled }) => disabled ? css`
    opacity: 50%;
  `:css`
    opacity: 100%;
  `};
`;

export const Image = ({src, alt, size = 'normal', disabled, backgroundColor} : ImageProps) => {
  return (
    <div style={{backgroundColor}}>
      <ImageComponent disabled={disabled} src={src} alt={alt} size={size} data-testid={"Image"}/>
    </div>
  );
};

