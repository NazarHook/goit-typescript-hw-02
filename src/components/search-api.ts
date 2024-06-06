import axios from 'axios';
import { SearchApiResponse } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const YOUR_ACCESS_KEY = '_MGPUAZwtkJ33GxQWTPh3XY2g6zGASobKTE2Qtap5gU';

export const SearchApi = async (searchQuery: string, page: number): Promise<SearchApiResponse['results']> => {
  const response = await axios.get<SearchApiResponse>('/search/photos', {
    params: {
      query: searchQuery,
      client_id: YOUR_ACCESS_KEY,
      per_page: 12,
      page,
    },
  });
  return response.data.results;
};
