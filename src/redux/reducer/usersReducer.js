// import { act } from "react";
import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USERS, GET_USER } from "../types";
import {LOADING, ERROR} from '../types'

const initialState = {
  data: [],
  item: {},
  loading: true,
  error: {}
};

export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    default: 
        return state
    case LOADING: {
        return{...state, loading: action.payload}
    }
    case ERROR: {
      return{...state, error: action.payload}
    }
    case GET_USERS:{
        return { ...state, data: action.payload }
    }
    case GET_USER:{
        return { ...state, item: action.payload }
    }
    case CREATE_USER:{
        return { ...state, data: action.payload }
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
  }
};
