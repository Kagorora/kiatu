/** @format */

import API from '../../utils/api';
import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../types/types.js';

export const listProducts = () => async (dispatch) => {
  try {
    // dispatch({ type: PRODUCT_LIST_REQUEST });

    const HEADERS = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const info = await axios(
      `https://kiatu-backend.herokuapp.com/api/sneakers`,
      {
        method: 'GET',
        headers: HEADERS,
        // body: JSON.stringify(payload),
      }
    );

    console.log('>>>>>', info);

    // dispatch({
    //   type: PRODUCT_LIST_SUCCESS,
    //   payload: info.data.sneakers,
    // });
  } catch (error) {
    console.log('#################>', error);
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
