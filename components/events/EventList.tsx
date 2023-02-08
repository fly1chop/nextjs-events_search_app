import { TEventItem } from 'types/events';
import EventItem from './EventItem';
import styles from './EventList.module.css';

interface Props {
  events: TEventItem[];
}

function EventList({ events }: Props) {
  return (
    <ul className={styles.list}>
      {events && events.map((event) => <EventItem key={event.id} {...event} />)}
    </ul>
  );
}

export default EventList;
