const BOOK_RESERVATION = 'Space/Rocket/BOOK_RESERVATION';
const CANCEL_RESERVATION = 'Space/Rocket/CANCEL_RESERVATION';
const SET_RESERVATION = 'Space/Rocket/SET_RESERVATION';

const initialState = [];

export const cancelReservation = (payload) => ({
  type: SET_RESERVATION,
  id: payload,
});

export const bookReservation = (payload) => ({
  type: BOOK_RESERVATION,
  id: payload,
});

export const setReservation = (payload) => ({
  type: SET_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESERVATION:
      return {
        ...state,
        rockets: action.payload,
      };
    case BOOK_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== parseInt(action.id, 10)) {
            return { ...rocket };
          }
          return { ...rocket, reserved: true };
        }),
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== parseInt(action.id, 10)) {
            return { ...rocket };
          }
          return { ...rocket, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
