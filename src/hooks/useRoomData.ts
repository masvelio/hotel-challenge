import { useState } from 'react';

import { HotelDetails, Room } from '../types/hotels';
import { API_URL_PATH_ROOM_RATES, BASE_API_URL } from '../utils/config';

const useRoomData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rooms, setRooms] = useState<Room[]>([]);

  const fetchRoomDetails = async (roomId: string) => {
    try {
      setLoading(true);
      const response = await fetch(BASE_API_URL + API_URL_PATH_ROOM_RATES + roomId);
      const data: HotelDetails = await response.json();
      setRooms(data.rooms);
    } catch (err) {
      console.log('Failed when fetching rooms data', err);
      setError('Failed to fetch rooms data');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    rooms,
    fetchRoomDetails,
  };
};

export default useRoomData;
