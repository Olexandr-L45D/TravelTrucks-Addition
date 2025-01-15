import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA1YjQwYTViZDU5OTA1NDIyMGY0NDk3YmEzYjJmNSIsIm5iZiI6MTcyNTU5NDQyMy4yODc1ODgsInN1YiI6IjY2ZDllMWM1ZDhlODg1YWI4NDZkMDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TvbdXQqddSub5Mw59Uixse-OSNQE4Xunk36NlBhj_AM",
  },
});

//getProductMovies робить запит на УРЛ до SearchForm
async function getProductsSerch(query, page = 1) {
  const response = await instance.get(`/search/catalog`, {
    params: {
      page,
      query,
      include_adult: false,
      language: "en-US",
      region: "string",
      kitchen: "kitchen",
      refrigerator: "refrigerator",
    },
  });
  // console.log(response.data.results)
  return response.data.results;
}
export { getProductsSerch };

//getProductMovies робить запит на УРЛ до HomePage
// export const getProductMovies = async () => {
//   const response = await instance.get("/trending/campers/day");
//   return response.data.results;
// };

//getProductDetails робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
export const getProductDetails = async campers_id => {
  const response = await instance.get(`/catalog/${campers_id}`);
  console.log(response.data);
  return {
    title: response.data.title,
    transmission: response.data.transmission,
    engine: response.data.engine,
    AC: response.data.AC,
    bathroom: response.data.bathroom,
    kitchen: response.data.kitchen,
    TV: response.data.TV,
    radio: response.data.radio,
    refrigerator: response.data.refrigerator,
    microwave: response.data.microwave,
    gas: response.data.gas,
    wate: response.data.wate,
    status: response.data.status,
  };
};

// export const getProductCast = async campers_id => {
//   const response = await instance.get(`/catalog/${campers_id}/credits`, {
//     params: {
//       campers_id,
//     },
//   });
//   return response.data.cast;
// };

export const getProductReviews = async campers_id => {
  const response = await instance.get(`/catalog/${campers_id}/reviews`, {
    params: {
      campers_id,
    },
  });

  return response.data.results;
};
