import Link from "next/link";
import classes from "./EventsItem.module.css";
import Button from "../ui/Button";

const EventsItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{humanReadDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formatAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button Link={exploreLink}>Exprore Events</Button>
        </div>
      </div>
    </li>
  );
};

export default EventsItem;
