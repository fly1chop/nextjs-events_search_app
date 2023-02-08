import { AddressIcon, DateIcon } from '../icons/index';
import LogisticsItem from './LogisticsItem';
import styles from './EventLogistics.module.css';

interface Props {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics({ date, address, image, imageAlt }: Props) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{formattedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
