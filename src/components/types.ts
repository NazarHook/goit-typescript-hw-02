export interface Photo {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    description: string;
  }
  
  export interface SearchApiResponse {
    results: Photo[];
  }
  