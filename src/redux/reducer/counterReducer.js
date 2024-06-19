import { DECREMENT, INCREMENT } from "../types";

const initialState = {
    data: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{...state, data: action.payload}
        case DECREMENT:{
            return{...state, data: action.payload}
        }
        default: {
            return state
        }
    }    
};

// ! initialState - це початкові дані.
// ! INCREMENT i DECREMENT - прописуємо в types. Прописуємо один раз і використовуємо багато разів.