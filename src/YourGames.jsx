import { Link } from "react-router-dom";
import BasicDateRangeCalendar from "./BasicDateCalendar";

export function YourGames({ count, setCount, value, setValue }) {
  return (
    <div>
      <h1>My games!</h1>
      <button
        onClick={() => {
          setCount((currCount) => currCount + 1);
        }}
      >
        +1
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>{count}</p>
      <Link to="/">Home</Link>
      <BasicDateRangeCalendar value={value} setValue={setValue} />
    </div>
  );
}
