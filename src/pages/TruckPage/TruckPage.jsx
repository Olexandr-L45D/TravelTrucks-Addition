// import css from "./TruckPage.module.css";
import TruckList from "../../components/TruckList/TruckList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBoxTruck from "../../components/SearchBoxTruck/SearchBoxTruck";
import { getProductsSerch } from "../../tmdb-movies";

export default function TruckPage() {
  const [products, setProduct] = useState([]);
  const [params] = useSearchParams();
  const owner = params.get("owner") ?? "";

  useEffect(() => {
    async function fetchData() {
      const data = await getProductsSerch(owner);
      setProduct(data);
    }
    fetchData();
  }, [owner]);

  return (
    <>
      <main>
        <SearchBoxTruck />
        {products.length > 0 && <TruckList products={products} />}
      </main>
    </>
  );
}

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
