import * as types from "../actions/types";

const initialState = {
  shops: [],
  loading : false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.FETCH_SHOPS:
      return {
        ...state,
        loading :true,
        shops: action.payload,
        
      };

    default:
      return state;
  }
};

export default reducer;
