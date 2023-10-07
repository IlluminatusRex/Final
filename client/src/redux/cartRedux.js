import { memoize } from 'proxy-memoize';
import { v4 as uuidv4 } from 'uuid';

//SECTION selectors
export const getCart = ({ cart }) => cart;
export const getTotalPrice = memoize((state) =>
  state.cart.map((course) => course.totalPrice)
);
export const getCarsIds = memoize((state) => state.cart.map((course) => course.id));

//SECTION action name creators
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

//SECTION action types
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const UPDATE_PRODUCT = createActionName('UPDATE_PRODUCT');

//SECTION action creators
export const addCourseToCart = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeCourseFromCart = (payload) => ({
  payload,
  type: REMOVE_PRODUCT,
});
export const updateCartProduct = (payload) => ({
  payload,
  type: UPDATE_PRODUCT,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...statePart, { ...action.payload, id: uuidv4() }];
    }
    case REMOVE_PRODUCT: {
      return [...statePart.filter((course) => course.id !== action.payload)];
    }
    case UPDATE_PRODUCT: {
      return statePart.map((course) =>
        course.id === action.payload.id
          ? {
              ...course,
              totalPrice: action.payload.totalCost,
            }
          : course
      );
    }
    default:
      return statePart;
  }
}