import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/dist/client/router";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandle = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  
  return (
    <div>
      <EventsSearch onSearch={findEventHandle} />
      <EventsList items={events} />
    </div>
  );
};

export default AllEventsPage;
