import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../types';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Photo[];
  onOpen: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onOpen }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.photo}>
          <ImageCard onOpen={onOpen} url={item.urls} alt={item.description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
