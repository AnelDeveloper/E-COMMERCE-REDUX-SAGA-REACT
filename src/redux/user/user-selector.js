import { createSelector } from "reselect";

const izaberiUsera = (container) => container.user;

export const izberiTrenutnogUsera = createSelector(
  [izaberiUsera],
  (user) => user.currentUser
);
