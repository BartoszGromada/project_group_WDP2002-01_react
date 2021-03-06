/* selectors */
export const getAll = ({ cart }) => cart;
export const getCount = ({ cart }) => cart.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...statePart, action.payload];

    case REMOVE_PRODUCT:
      return statePart.filter(products => products.id !== action.payload);

    default:
      return statePart;
  }
}
