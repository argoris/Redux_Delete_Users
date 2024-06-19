import { CREATE_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST } from "../types";

const initialState = {
  data: [],
  item: {}
};

export default function postsReducer (state = initialState, action) {
  switch (action.type) {
    default: 
        return state
    case GET_POSTS:{
        return { ...state, data: action.payload }
    }
    case GET_POST:{
        return { ...state, item: action.payload }
    }
    case CREATE_POST:{
        return { ...state, data: action.payload }
    }
    case EDIT_POST: {
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
    case DELETE_POST: {
      return {...state, data: state.data.filter(value=>value.id !== action.payload.id)}
    }
  }
};