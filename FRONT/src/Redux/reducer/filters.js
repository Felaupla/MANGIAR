import {
  FILTER_BY_DIET,
  SET_ORDER_BY,
  SET_FILTERED_INGREDIENTS,
  DELETE_FILTERED_INGREDIENT,
  CLEAR_FILTERS,
  SET_ORDER_BY_PRICE_OR_RATING,
} from "../actions/index.js";

const initialState = {
  filteredDiet: "All Diets",
  orderBy: "",
  orderByPriceOrRating: {
    type: undefined,
    order: "",
  },
  filteredIngredients: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_DIET:
      return { ...state, filteredDiet: action.payload };

    case SET_ORDER_BY:
      return { ...state, orderBy: action.payload };

    case SET_FILTERED_INGREDIENTS:
      return {
        ...state,
        filteredIngredients: [...state.filteredIngredients, action.payload],
      };

    case DELETE_FILTERED_INGREDIENT:
      return {
        ...state,
        filteredIngredients: state.filteredIngredients.filter(
          (f) => f !== action.payload
        ),
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredIngredients: [],
        filteredDiet: "",
      };

    case SET_ORDER_BY_PRICE_OR_RATING:
      return {
        ...state,
        orderByPriceOrRating: action.payload,
      };

    default:
      return { ...state };
  }
};

export default filtersReducer;
