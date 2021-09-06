import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link href={props.Link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
