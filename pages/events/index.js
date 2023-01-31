import { getAllEvents } from '../../dummy-data.js';
import EventList from '../../components/events/EventList.js';
import EventsSearch from '../../components/events/EventsSearch.js';
import { useRouter } from 'next/router.js';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export default AllEventsPage;
