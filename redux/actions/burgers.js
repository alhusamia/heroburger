import instance from "./instance";

import { SET_BURGERSHOPS } from "./types";

export const getBurgers = () => async (dispatch) => {
  try {
    const res = await instance.get("/");

    const burgers = res.data;

    dispatch({
      type: SET_BURGERSHOPS,
      payload: burgers,
    });
  } catch (err) {
    console.error(err.response.data);
  }
};
