/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/

import React from 'react';
import styled, { css } from 'styled-components';
import { ImageProps } from './Image.types';


// Todo: probably make the size a variant.
const ImageComponent = styled.img<ImageProps>`
  display: block;
  border-radius: 10%;

  ${({ size }) => size === 'mobile' ? css`
    width: 55px;
    height: 65px;

  ` : css`
    width: 120px;
    height: 135px;

  `};
`;

export const Image: React.FC<ImageProps> = ({src, alt, size = 'normal'}) => {
  return (
    <>
      <ImageComponent src={src} alt={alt} size={size}/>
    </>
  );
};

