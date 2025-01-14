// contactsSlice.js (це окрема локаль - locale-slice)
import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // .addCase(addContact.pending, (state, action) => {
    //     state.loading = true;
    // })
    // .addCase(addContact.fulfilled, (state, action) => {
    //     state.items.push(action.payload);
    //     state.loading = false;
    //     state.error = null;
    // })
    // .addCase(addContact.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // })
  },
});

export default slice.reducer;

// .addCase(deleteContact.pending, (state, action) => {
//                 state.loading = true;
//             })
//             .addCase(deleteContact.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 const index = state.items.findIndex(
//                     contact => contact.id === action.payload.id
//                 );
//                 state.items.splice(index, 1);
//             })
//             .addCase(deleteContact.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(logOut.fulfilled, (state) => {
//                 state.items = [];
//                 state.loading = false;
//                 state.error = null;
//             });

// console.log(slice.reducer);

// return (contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))
