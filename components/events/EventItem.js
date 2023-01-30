import Button from '../ui/Button.js';
import styles from './EventItem.module.css';
import { DateIcon, AddressIcon, ArrowRightIcon } from '../icons';

function EventItem({ title, image, date, location, id }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formtattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formtattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
