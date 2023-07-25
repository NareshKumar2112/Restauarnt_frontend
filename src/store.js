import { createStore } from 'redux';

// Action types
const RESERVE_TABLE = 'RESERVE_TABLE';

// Action creators
export const reserveTable = (reservation) => ({
  type: RESERVE_TABLE,
  payload: reservation,
});

// Initial state
const initialState = {
  reservations: [],
};

// Reducer
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_TABLE:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reservationReducer);

export default store;
