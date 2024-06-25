import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Caption = styled.p`
  margin-top: 0.5rem;
  font-style: italic;
  color: ${({ theme }) => theme.secondaryColor};
`;

const PostImage = ({ src, alt, caption }) => (
  <ImageWrapper>
    <Image src={src} alt={alt} loading="lazy" />
    {caption && <Caption>{caption}</Caption>}
  </ImageWrapper>
);

export default PostImage;