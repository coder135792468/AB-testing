import { configureStore } from "@reduxjs/toolkit";
import { templateSlice } from "./slices/templateSlice";
import { templateApi } from "./slices/templateApiSlice";

export const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    [templateApi.reducerPath]: templateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([templateApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
