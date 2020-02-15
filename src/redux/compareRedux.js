/* selectors */
export const getAllToCompare = ({ compare }) => compare;

// export const getNew = ({ products }) =>
//   products.filter(item => item.newFurniture === true);

const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const GET_ALL = createActionName('GET_ALL');
// const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
// const FETCH_ERROR = createActionName('FETCH_ERROR');
// const CHANGE_STATUS = createActionName('CHANGE_STATUS');

/* action creators */
export const getProductsToCompare = payload => ({ type: GET_ALL });
// export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
// export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case GET_ALL:
      return statePart;
    default:
      return statePart;
  }
}
