import { useEffect, useMemo, useState } from 'react';

import { useFilter } from '../context/filterContext';
import { Hotel } from '../types/hotels';
import { API_URL_PATH_HOTEL, BASE_API_URL } from '../utils/config';

const useHotelData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const { rating } = useFilter();

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

  const filteredHotels = useMemo(
    () => hotels.filter((hotel) => Number(hotel.starRating) >= rating),
    [hotels, rating],
  );

  return {
    loading,
    error,
    hotels: filteredHotels,
  };
};

export default useHotelData;
