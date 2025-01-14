import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";
const Navigation = lazy(() => import("../Navigation/Navigation"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const TruckPage = lazy(() => import("../../pages/TruckPage/TruckPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const TruckDetailsPage = lazy(() =>
  import("../../pages/TruckDetailsPage/TruckDetailsPage")
);
const TruckDetail = lazy(() => import("../TruckDetail/TruckDetail"));
const TruckReviews = lazy(() => import("../TruckReviews/TruckReviews"));

export default function App() {
  return (
    <div className={css.container}>
      <Suspense fallback={<div>LOADING list of trucks...</div>}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<div>LOADING Ditails...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<TruckPage />} />
          <Route path="/catalog/:id" element={<TruckDetailsPage />}>
            <Route path="campers" element={<TruckDetail />} />
            <Route path="reviews" element={<TruckReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
