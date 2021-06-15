/** @format */

import { VIEW_ALL_SNEAKERS, ERRORS } from './actions/viewSneakers.js';

const initialState = {
  errors: null,
  allSneakers: [],
};

const hotelRestoReducer = (
  state = initialState,
  action: { type, payload }
) => {
  const { type, payload } = action;

  switch (type) {
    case VIEW_ALL_SNEAKERS:
      return {
        ...state,
        allSneakers: payload,
      };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

export default hotelRestoReducer;
