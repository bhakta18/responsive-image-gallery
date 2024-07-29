import React from 'react';
import styled from 'styled-components';
import ImageCard from '/ImageCard';

const Gallery = () => {
  const imageCards = [
    {
      title: 'Beautiful Landscape',
      imageUrl: 'https://via.placeholder.com/400',
      price: '$100'
    },
    {
      title: 'City Lights',
      imageUrl: 'https://via.placeholder.com/400',
      price: '$200'
    },
    // Add more image cards as needed
  ];

  return (
    <GalleryContainer>
      {imageCards.map((card, index) => (
        <ImageCard
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          price={card.price}
        />
      ))}
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

export default Gallery;

