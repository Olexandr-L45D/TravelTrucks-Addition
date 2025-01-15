// import { createProxyMiddleware } from "http-proxy-middleware";
// import cors from "cors";

// export default function (app) {
//   app.use(cors()); // Дозволяє міждоменні запити

//   app.use(
//     "/campers", // Перехоплюємо запити до /campers
//     createProxyMiddleware({
//       target: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io", // URL бекенду
//       changeOrigin: true, // Дозволяє підміняти Origin для CORS
//     })
//   );
// }
