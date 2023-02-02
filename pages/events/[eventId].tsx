import { useRouter } from 'next/router.js';
import { getEventById } from '../../dummy-data.js';
import EventSummary from '../../components/event-detail/EventSummary.js';
import EventLogistics from '../../components/event-detail/EventLogistics.js';
import EventContent from '../../components/event-detail/EventContent.js';
import ErrorAlert from '../../components/ui/ErrorAlert.js';

function EventDetailPage() {
  const router = useRouter();

  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
