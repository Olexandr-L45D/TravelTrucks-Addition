// import css from "./TruckPage.module.css";
import TruckList from "../../components/TruckList/TruckList";
import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import SearchBoxTruck from "../../components/SearchBoxTruck/SearchBoxTruck";
import { fetchAllCampers } from "../../redux/campers/operations";
import { useDispatch } from "react-redux";

export default function TruckPage() {
  const dispatch = useDispatch();
  const [campers, setProduct] = useState([]);
  // const [params] = useSearchParams();
  // const owner = params.get("owner") ?? "";

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchAllCampers()).unwrap();
        // const data = await dispatch(fetchAllCampers(owner)).unwrap();
        setProduct(data);
      } catch (error) {
        console.error("Помилка завантаження даних:", error);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <main>
        <SearchBoxTruck />
        {campers.length > 0 && <TruckList campers={campers} />}
      </main>
    </>
  );
}

// Виклик Thunk-дії та розгортання, Якщо ви використовуєте @reduxjs/toolkit, метод unwrap() дозволяє обробляти результат thunk-дії як звичайний проміс.
// setProduct(data); // Зберігаємо отримані дані
// export default function TruckPage() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchContact());
//   }, [dispatch]);

//   return (
//     <div className={css.cartPage}>
//       <h1 className={css.cartTitle}>TruckPage</h1>
//       <ContactForm />
//       <div>{isLoading && "Request in progress..."}</div>
//       <SearchBoxTruck />
//       <TrucksList />
//     </div>
//   );
// }
