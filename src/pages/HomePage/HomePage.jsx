import css from "./HomePage.module.css";
import { FcBusinessman } from "react-icons/fc";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h1 className={css.cartTitle}>
          Travel Trucks Addition <FcBusinessman className={css.cartIcon} />
        </h1>
        <h1 className={css.cartText}>Welcom in my Truck card</h1>
      </div>
    </div>
  );
}


// import { useState, useEffect } from "react"
// import { getProductMovies } from '../tmdb-movies';
// import MovieList from "../components/MovieList/MovieList"

// export default function HomePage() {
//     const [products, setProduct] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 setLoading(true);
//                 setError(false);
//                 const data = await getProductMovies();
//                 setProduct(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError("Sorry nothing found");
//             }
//         }
//         fetchData();
//     }, []);

//     return (
//         <main>
//             <h3>Trending today</h3>
//             {products.length > 0 && <MovieList products={products} />}
//         </main>
//     );
// }


// // Сторінка окремого кемпера: сторінка з детальним описом обраного кемпера, галереєю фотографій, відгуками користувачів, формою для бронювання.Для опиcу характеристик використовуй наступні властивості, якщо вони присутні на данному кемпері: transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water.
// // Для опиcу деталей використовуй наступні властивості: form, length, width, height, tank, consumption.
