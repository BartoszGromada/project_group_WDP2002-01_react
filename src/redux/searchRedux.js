/* selectors */
export const getSearchString = ({ search }) => search.searchString;
export const getCategories = ({ categories }) =>
  categories.map(category => category.name);
export const getSelectedCategory = ({ search }) => search.searchCategory;

/* action name creator */
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_SEARCH = createActionName('SET_SEARCH');
const SET_CATEGORY = createActionName('SET_CATEGORY');

/* action creators */
export const setSearchString = payload => ({ payload, type: SET_SEARCH });
export const setSearchCategory = payload => ({ payload, type: SET_CATEGORY });

/* reducer */
export default (statePart = {}, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...statePart, searchString: action.payload };
    case SET_CATEGORY:
      return { ...statePart, searchCategory: action.payload.toLowerCase() };
    default:
      return statePart;
  }
};
