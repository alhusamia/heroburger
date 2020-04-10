import { SET_BURGERSHOPS } from "../actions/types";

export default (burgers = [], { type, payload }) => {
  switch (type) {
    case SET_BURGERSHOPS:
      return payload;
    default:
      return burgers;
  }
};
