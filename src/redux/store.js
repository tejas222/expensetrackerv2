import { configureStore } from "@reduxjs/toolkit";
import { expenseApi } from "./features/expense";

export const store = configureStore({
  reducer: {
    [expenseApi.reducerPath]: expenseApi.reducer,
  },
  middleware: (gDM) => gDM().concat(expenseApi.middleware),
});
