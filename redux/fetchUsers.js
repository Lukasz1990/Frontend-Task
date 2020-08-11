import { FETCH_USERS } from "./types/types";

export const fetchUsers = (data) => {
  return { type: FETCH_USERS, data: data };
};
