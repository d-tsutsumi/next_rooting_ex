import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";

const FilterrdEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center"> Loading...</p>;
  }

  const filterYear = filterData[0];
  const filterMath = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMath;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>不正な値です。</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>該当のイベントはみつかりません</p>;
  }

  return <EventsList items={filteredEvents} />;
};

export default FilterrdEventsPage;
