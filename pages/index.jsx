import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/EventsList";

const HomePage = () => {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList items={featureEvents} />
    </div>
  );
};

export default HomePage;
