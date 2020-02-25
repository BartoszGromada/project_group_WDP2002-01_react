/* selectors */
export const getCurrency = ({ currency }) => currency;
export const getAllCurrencies = ({ avaibleCurrencies }) => avaibleCurrencies;

const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENCY = createActionName('CHANGE_CURRENCY');

/* action creators */
export const changeCurrency = payload => ({ type: CHANGE_CURRENCY, payload });

/* reducer */
export default function reducer(statePart = 'USD', action = {}) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.payload;
    default:
      return statePart;
  }
}
