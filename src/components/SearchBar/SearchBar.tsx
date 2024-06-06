// src/SearchBar/SearchBar.tsx
import React from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = (form.elements.namedItem('query') as HTMLInputElement).value.trim();
    if (query === '') {
      iziToast.error({
        message: 'Search query must be at least 3 characters long',
        position: 'topRight',
      });
    } else {
      onSearch(query);
    }
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.searchField}
          name="query"
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
