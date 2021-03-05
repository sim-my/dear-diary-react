export const DISPLAY_LIST = "DISPLAY_LIST";
export const DISPLAY_SINGLE_POST = "DISPLAY_SINGLE_POST";

export const displayList = (payload) => {
  return {
    type: DISPLAY_LIST,
    payload,
  };
};

export const displaySinglePost = (payload) => {
  return {
    type: DISPLAY_SINGLE_POST,
    payload,
  };
};
