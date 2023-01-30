import EventItem from './EventItem.js';
import styles from './EventList.module.css';

function EventList({ events }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventList;
