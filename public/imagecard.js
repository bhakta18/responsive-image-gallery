import React from 'react';
import styled from 'styled-components';

const ImageCard = ({ title, imageUrl, price }) => {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardPrice>{price}</CardPrice>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const CardPrice = styled.p`
  margin: 0.5rem 0 0;
  color: #666;
`;

export default ImageCard;
