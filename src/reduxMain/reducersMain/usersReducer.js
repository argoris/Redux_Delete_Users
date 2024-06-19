import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USERS, GET_USER, USER_ERROR } from "../typesMain/user";

const initialState = {
  data: [],
  item: {},
  error: null,
};

export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    default: 
        return state
    case GET_USERS:{
        return { ...state, data: action.payload }
    }
    case GET_USER:{
        return { ...state, item: action.payload }
    }
    case CREATE_USER:{
        return { ...state, data:[...state.data, action.payload] }
    }
    case EDIT_USER: {
      return { 
            ...state, data: state.data.map((value, index)=>{
              if(value.id === action.payload.id){
                return action.payload
              }else{
                return value
              }
            })
        }
    }
    case DELETE_USER: {
      return {...state, data: state.data.filter(value=>value.id !== action.payload.id)}
    }
    case USER_ERROR: {
      return{...state, error: action.payload}
    }
  }
};