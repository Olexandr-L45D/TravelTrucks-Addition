import css from "./SearchBoxTruck.module.css";
import { useSearchParams } from "react-router-dom";

export default function SearchBoxTruck() {
  const [params, setParams] = useSearchParams();
  const handleSubmit = event => {
    event.preventDefault();
    params.set("owner", event.target.elements.owner.value);
    setParams(params);
    event.target.reset();
  };

  return (
    <div>
      <h5 className={css.paragraf}>Search Truck</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" name="owner" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
