import { v4 as uuidv4 } from 'uuid';
import { API_URL } from '../config';
import axios from 'axios';

//SECTION - selectors
export const getAllOrders = ({ orders }) => orders;

//SECTION action name creators
const reducerName = 'orders';
const createActionName = (name) => `app/${reducerName}/${name}`;

//SECTION action types
const ADD_ORDER = createActionName('ADD_ORDER');

//SECTION action creators
export const addOrder = (payload) => ({ payload, type: ADD_ORDER });

export const addOrderRequest = (order) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json; charset = UTF-8',
      },
      body: JSON.stringify(order),
    };
    fetch(`${API_URL}/api/orders`, options).then(() => {
      dispatch(addOrder(order));
    });
  };
};

//SECTION - reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_ORDER:
      return [
        ...statePart,
        {
          ...action.payload,
          id: uuidv4(),
        },
      ];
    default:
      return statePart;
  }
}