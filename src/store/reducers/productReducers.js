/** @format */

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
} from '../types/types.js';

const initialState = {
  products: [],

  productDetailSuccess: undefined,
  productDetailLoading: false,
  productDetailError: undefined,

  cartListLoading: false,
  cartListSuccess: undefined,
  cartListError: undefined,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case PRODUCT_DETAIL_FAIL:
      return { ...state, productDetailError: action.payload.errors };

    case PRODUCT_DETAIL_REQUEST:
      return { ...state, productDetailLoading: action.payload.loading };

    case PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetailSuccess: action.payload.data };

    case CART_LIST_REQUEST:
      return { ...state, cartListLoading: action.payload.loading };

    case CART_LIST_SUCCESS:
      return { ...state, cartListSuccess: action.payload.data };

    case CART_LIST_FAIL:
      return { ...state, cartListError: action.payload.errors };

    default:
      return state;
  }
};
