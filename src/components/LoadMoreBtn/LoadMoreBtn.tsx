import React from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onAdd: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onAdd }) => {
  return (
    <button className={css.addBtn} onClick={onAdd}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
