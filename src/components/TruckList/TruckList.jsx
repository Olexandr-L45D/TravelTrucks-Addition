import { Link, useLocation } from "react-router-dom";
import css from "./TruckList.module.css";

export default function TruckList({ campers = [] }) {
  const location = useLocation();
  if (!campers || campers.length === 0) {
    return <p className={css.message}>No data available...</p>;
  }
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {campers.map(product => (
          <li key={product.id}>
            <Link to={`/campers/${product.id}`} state={location}>
              <h4 className={css.titles}>{product.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
