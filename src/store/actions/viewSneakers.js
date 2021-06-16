/** @format */

import API from '../../utils/api';
import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from '../types/types';

export const listProducts = () => async (dispatch) => {
  try {
    // dispatch({ type: PRODUCT_LIST_REQUEST });

    const HEADERS = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Accept: 'application/json',
    };

    const info = await axios.get(
      `https://kiatu-backend.herokuapp.com/api/sneakers`,
      {
        method: 'GET',
        headers: HEADERS,
      }
    );

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: info.data.sneakers,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const viewProductDetailAction = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAIL_REQUEST, payload: { loading: true } });
  try {
    const res = await axios.get(
      `https://kiatu-backend.herokuapp.com/api/sneakers/search/${productId}`
    );
    dispatch({ type: PRODUCT_DETAIL_REQUEST, payload: { loading: false } });

    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: { data: res.data.sneakers[0] },
    });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAIL_REQUEST, payload: { loading: false } });

    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload: { errors: error.response.data },
    });
  }
};
