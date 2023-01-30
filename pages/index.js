import Link from 'next/link.js';
import EventList from '../components/events/EventList.js';
import { getFeaturedEvents } from '../dummy-data.js';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <EventList events={featuredEvents} />
      <ul>
        <li>
          <Link href={{ pathname: '/events' }}>Events</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
