import { FETCH_REPO } from "./types/types";

export const fetchRepo = (data) => {
  return { type: FETCH_REPO, data: data };
};
