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
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_REMOVE_REQUEST,
  CART_REMOVE_SUCCESS,
  CART_REMOVE_FAIL,
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

export const viewCartListAction = () => async (dispatch) => {
  dispatch({ type: CART_LIST_REQUEST, payload: { loading: true } });

  try {
    const res = await axios.get(
      `https://kiatu-backend.herokuapp.com/api/orders`
    );

    dispatch({ type: CART_LIST_REQUEST, payload: { loading: false } });

    dispatch({
      type: CART_LIST_SUCCESS,
      payload: { data: res.data.orders },
    });
  } catch (error) {
    dispatch({ type: CART_LIST_REQUEST, payload: { loading: false } });

    dispatch({
      type: CART_LIST_FAIL,
      payload: { error: error.response.data },
    });
  }
};

export const AddToCartAction = (productId, order) => async (dispatch) => {
  dispatch({ type: CART_ADD_REQUEST, payload: { loading: true } });

  try {
    const res = await axios.post(
      `https://kiatu-backend.herokuapp.com/api/orders/${productId}`,
      order
    );

    dispatch({ type: CART_ADD_REQUEST, payload: { loading: false } });

    dispatch({
      type: CART_ADD_SUCCESS,
      payload: { data: res.data.message },
    });
  } catch (error) {
    dispatch({ type: CART_ADD_REQUEST, payload: { loading: false } });

    dispatch({
      type: CART_ADD_FAIL,
      payload: { error: error.response.data },
    });
  }
};

export const RemoveToCartAction = (itemId) => async (dispatch) => {
  dispatch({ type: CART_REMOVE_REQUEST, payload: { loading: true } });

  try {
    const res = await axios.delete(
      `https://kiatu-backend.herokuapp.com/api/orders/${itemId}`
    );

    dispatch({ type: CART_REMOVE_REQUEST, payload: { loading: false } });

    dispatch({
      type: CART_REMOVE_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({ type: CART_REMOVE_REQUEST, payload: { loading: false } });

    dispatch({
      type: CART_REMOVE_FAIL,
      payload: { error: error.response.data },
    });
  }
};
