/* selectors */
export const getRates = ({ currencyRates }) => currencyRates;
export const getStatus = ({ currencyRates }) => currencyRates.loading;

const reducerName = 'rates';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchRatesFromAPI = () => {
  return dispatch => {
    dispatch(fetchStarted());

    fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,PLN,USD`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(fetchSuccess(data.rates));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  };
};

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
          done: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          done: true,
        },
        rates: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: true,
          done: false,
        },
      };
    }
    default:
      return statePart;
  }
}
