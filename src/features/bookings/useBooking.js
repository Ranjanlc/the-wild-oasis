import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import { useParams } from 'react-router-dom';
import { getBooking } from '../../services/apiBookings';

export default function useBooking() {
  const { bookingId } = useParams();
  const {
    data: booking,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: getBooking.bind(null, bookingId),
    retry: false,
  });
  return { isLoading, error, booking };
}
