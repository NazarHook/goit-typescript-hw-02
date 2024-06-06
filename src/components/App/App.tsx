// src/App.tsx
import { useEffect, useState } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { SearchApi } from '../search-api';
import { Photo } from '../types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getPhotos() {
      try {
        setError(false);
        setLoader(true);
        const data = await SearchApi(query, page);
        if (data.length === 0) {
          iziToast.error({
            message: 'No images found!',
            position: 'topRight',
            title: 'Sorry',
          });
        } else {
          setPhotos((prevList) => [...prevList, ...data]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getPhotos();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModal(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && <ImageGallery onOpen={openModal} items={photos} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && !loader && <LoadMoreBtn onAdd={handleLoadMore} />}
      {isModal && <ImageModal selectedImage={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
