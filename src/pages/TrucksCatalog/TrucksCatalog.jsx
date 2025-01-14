import css from "./TrucksCatalog.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrucksList from "../../components/TrucksList/TrucksList";
import { fetchContact } from "../../redux/campers/operations";
import { selectLoading } from "../../redux/campers/selectors";
import SearchBoxTruck from "../../components/SearchBoxTruck/SearchBoxTruck";

export default function TrucksCatalog() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className={css.cartPage}>
      <h1 className={css.cartTitle}>Your TrucksCatalog Card </h1>
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBoxTruck />
      <TrucksList />
    </div>
  );
}
