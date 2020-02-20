const reducerName = 'input';
const createActionName = name => `app/${reducerName}/${name}`;

const UPDATE_INPUT = createActionName('UPDATE_INPUT');

export const updateInput = input => ({ type: UPDATE_INPUT, payload: { val: input } });

export default function reducer(statePart = { input: {} }, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { input: action.payload };
    default:
      return statePart;
  }
}
