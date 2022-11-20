import { useMemo, useState } from 'react';

import { useFilter } from '../context/filterContext';
import { HotelDetails, Room } from '../types/hotels';
import { API_URL_PATH_ROOM_RATES, BASE_API_URL } from '../utils/config';

const useRoomData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rooms, setRooms] = useState<Room[]>([]);

  const { adultsInRoom, childrenInRoom } = useFilter();

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

  const filteredRooms = useMemo(
    () =>
      rooms.filter(
        (room) =>
          room.occupancy.maxChildren >= childrenInRoom &&
          room.occupancy.maxAdults >= adultsInRoom,
      ),
    [rooms, childrenInRoom, adultsInRoom],
  );

  return {
    loading,
    error,
    rooms: filteredRooms,
    fetchRoomDetails,
    fetched: rooms.length > 0,
  };
};

export default useRoomData;
