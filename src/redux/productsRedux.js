/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'opinion';
const createActionName = name => `${reducerName}/${name}`;

/* action types */
const UPDATE_OPINION = createActionName('UPDATE_OPINION');

/* action creators */
export const updateOpinion = payload => ({
  payload,
  type: UPDATE_OPINION,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_OPINION: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
