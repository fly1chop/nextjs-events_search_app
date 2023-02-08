import Link from 'next/link.js';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

function HomePage({ events }) {
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <EventList events={events} />
      <ul>
        <li>
          <Link href={{ pathname: '/events' }}>Events</Link>
        </li>
      </ul>
    </div>
  );
}

// export async function getStaticProps() {}

export default HomePage;
