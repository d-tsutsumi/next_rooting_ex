import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsSearch />
      <EventsList items={events} />
    </div>
  );
};

export default AllEventsPage;
