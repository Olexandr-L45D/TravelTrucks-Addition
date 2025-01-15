import css from "./TrucksCatalog.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrucksList from "../../components/TruckList/TruckList";
import { fetchAllCampers } from "../../redux/campers/operations";
import { selectLoading } from "../../redux/campers/selectors";
import SearchBoxTruck from "../../components/SearchBoxTruck/SearchBoxTruck";

export default function TrucksCatalog() {
  const dispatch = useDispatch();
  // const [campers, setProduct] = useState([]);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <div className={css.cartPage}>
      <h1 className={css.cartTitle}>Your TrucksCatalog Card </h1>
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBoxTruck />
      {/* {campers.length > 0 && <TruckList campers={campers} />} */}
      <TrucksList />
    </div>
  );
}
