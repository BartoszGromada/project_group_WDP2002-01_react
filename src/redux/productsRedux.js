/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'opinion';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_OPINION = createActionName('UPDATE_OPINION');

/* action creators */
export const updateOpinion = (product, star) => ({
  product,
  star,
  type: UPDATE_OPINION,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_OPINION: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    default:
      return statePart;
  }
}
