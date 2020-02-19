/* selectors */
export const getMode = ({ mode }) => mode;

/* action name creator */
const reducerName = 'mode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_MODE = createActionName('UPADE_MODE');

/* action creators */
export const updateMode = mode => ({ mode, type: UPDATE_MODE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_MODE:
      return action.mode;
    default:
      return statePart;
  }
}
