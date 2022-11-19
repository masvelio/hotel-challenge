import { useEffect, useState } from 'react';

import { Hotel } from '../types/hotels';
import { API_URL_PATH_HOTEL, BASE_API_URL } from '../utils/config';

const useHotelData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_API_URL + API_URL_PATH_HOTEL);
        const data = await response.json();
        setHotels(data);
      } catch (err) {
        console.log('Failed when fetching hotels data', err);
        setError('Failed to fetch hotels data');
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, []);

  return {
    loading,
    error,
    hotels,
  };
};

export default useHotelData;
