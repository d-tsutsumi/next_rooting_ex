import { useRef } from "react";
import Button from "../ui/Button";
import classes from "./EventSearch.module.css";

const EventsSearch = (props) => {
  const yaerRef = useRef();
  const monthRef = useRef();
  const submitHandle = (e) => {
    e.preventDefault();

    const selectedYear = yaerRef.current.value;
    const selectedMonth = yaerRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
    
  };

  return (
    <form className={classes.form} onClick={submitHandle}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">年</label>
          <select name="" id="year" ref={yaerRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">月 </label>
          <select name="month" id="month" ref={monthRef}>
            <option value="1">1月</option>
            <option value="2">2月</option>
            <option value="3">3月</option>
            <option value="4">4月</option>
            <option value="5">5月</option>
            <option value="6">6月</option>
            <option value="7">7月</option>
            <option value="8">8月</option>
            <option value="9">9月</option>
            <option value="10">10月</option>
            <option value="11">11月</option>
            <option value="12">1月</option>
          </select>
        </div>
        <Button>探す</Button>
      </div>
    </form>
  );
};

export default EventsSearch;
