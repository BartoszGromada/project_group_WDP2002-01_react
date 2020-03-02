export const getInputValue = ({ input }) => input;

const reducerName = 'input';
const createActionName = name => `app/${reducerName}/${name}`;

const UPDATE_INPUT = createActionName('UPDATE_INPUT');

export const updateInput = payload => ({ type: UPDATE_INPUT, payload });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_INPUT:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
