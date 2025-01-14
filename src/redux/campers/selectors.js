import { createSelector } from "@reduxjs/toolkit";
import { selectStatusFilter } from "../filters/selectors";

export const selectLoading = state => state.campers.loading;

export const selectFilter = state => state.campers.filter;

export const selectError = state => state.campers.error;

export const selectContacts = state => state.campers.items;
export const selectOutContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (campers, filter) => {
    return campers.filter(
      camper =>
        camper.name.toLowerCase().includes(filter.toLowerCase()) ||
        camper.number.includes(filter)
    );
  }
);
