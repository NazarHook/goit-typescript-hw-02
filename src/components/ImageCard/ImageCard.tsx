import React from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
  onOpen: (url: string) => void;
  url: {
    small: string;
    regular: string;
  };
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ onOpen, url, alt }) => {
  return (
    <div className={css.photo}>
      <img onClick={() => onOpen(url.regular)} src={url.small} alt={alt} width="400" height="242" />
    </div>
  );
};

export default ImageCard;
