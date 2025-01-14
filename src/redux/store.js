// store

import { configureStore } from "@reduxjs/toolkit";
import tasksReducerCard from "./campers/slice";
import { filtersReducer } from "./filters/slice";

import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistedAuthReducer = persistReducer({
//   key: "jwt-token",
//   storage,
//   whitelist: ["token"],
// });

export const store = configureStore({
  reducer: {
    campers: tasksReducerCard,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
