// MovieReviews
import css from "./TruckReviews.module.css";
import { FcCamcorderPro } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductReviews } from "../../tmdb-movies";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { GoArrowLeft } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";

const TruckReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getReviews = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieReviews = await getProductReviews(movieId, { signal });
        setReviews(movieReviews);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    getReviews();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.container}>
          {reviews.map(review => (
            <li key={review.id}>
              <p>
                {" "}
                <FcCamcorderPro className={css.icon} />
                <strong className={css.text}>{review.author}</strong>
              </p>
              <p className={css.text}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.error}> Any reviews for this movie!</p>
      )}
      <button className={css.buttonIcon}>
        <GoArrowLeft className={css.icons} />{" "}
        <NavLink to={location.state ?? "/"}>Go back</NavLink>{" "}
      </button>
    </div>
  );
};

export default TruckReviews;
