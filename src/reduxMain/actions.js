import axios from "axios";
import {
  CREATE_USER,
  DELETE_USER,
  EDIT_USER,
  GET_USER,
  GET_USERS,
  USER_ERROR,
} from "./typesMain/user";
import { message } from "antd";
const URL = "http://localhost:3000/";

export function axiosRequest(data, namePage, request) {
  const httpRequest = request.toLowerCase();
  switch (request) {
    default:
      return async (dispatch) => {
        axios.get(URL + namePage).then((res) => {
          dispatch({ type: GET_USERS, payload: res.data });
        });
      };
    case "post": {
      return async (dispatch) => {
        axios.post(URL + namePage, data).then((res) => {
          dispatch({ type: CREATE_USER, payload: res.data });
        });
      };
    }
    case "put": {
      return async (dispatch) => {
        axios.put(`${URL}${namePage}/${data.id}`, data).then((res) => {
          dispatch({ type: EDIT_USER, payload: res.data });
        });
      };
    }
    case "delete": {
      return async (dispatch) => {
        axios.delete(`${URL}${namePage}/${data.id}`).then((res) => {
          dispatch({ type: DELETE_USER, payload: data });
        });
      };
    }
    case "get": {
      return async (dispatch) => {
        axios
          .get(`${URL}${namePage}/${data.id}`)
          .then((res) => {
            dispatch({ type: GET_USER, payload: res.data });
          })
          .catch((error) => {
            dispatch({
              type: USER_ERROR,
              payload: {
                message: error.message,
                code: error.code,
                status: error.status,
              },
            });
          });
      };
    }
  }
}

export function clearError() {
  return {
    type: USER_ERROR,
    payload: null
  };
}
