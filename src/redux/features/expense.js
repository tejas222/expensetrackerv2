import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/",
  }),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({
    getExpense: builder.query({
      query: () => "expenses",
      providesTags: ["Expenses"],
    }),
    addExpense: builder.mutation({
      query: (expense) => ({
        url: "expenses",
        method: "POST",
        body: expense,
      }),
      invalidatesTags: ["Expenses"],
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...expense }) => ({
        url: `expense/${id}`,
        method: "PUT",
        body: expense,
      }),
      invalidatesTags: ["Expenses"],
    }),
  }),
});

export const { useGetExpenseQuery, useAddExpenseMutation } = expenseApi;
