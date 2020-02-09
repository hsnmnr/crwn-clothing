import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorySelections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
