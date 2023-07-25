import React from "react";

const initialState = {
    reservedTables: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESERVE_TABLE':
        return {
          ...state,
          reservedTables: [...state.reservedTables, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default reducer;