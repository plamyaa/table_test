import axios from "axios";
import { API_URL } from "../const";

export const ADD_DATA = "ADD_DATA";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const SELECT_COLUMN = "SELECT_COLUMN";
export const SELECT_CONDITION = "SELECT_CONDITION";
export const SELECT_VALUE = "SELECT_VALUE";

export function addData(data) {
    return {type: ADD_DATA, data}
}
export function changePage(page) {
    return {type: CHANGE_PAGE, page}
}
export function selectColumn(column) {
    return {type: SELECT_COLUMN, column}
}
export function selectCondition(condition) {
    return {type: SELECT_CONDITION, condition}
}
export function selectValue(value) {
    return {type: SELECT_VALUE, value}
}

export function fetchData() {
    return dispatch => {
        axios
            .get(API_URL)
            .then((res) => dispatch(addData(res.data)))
            .catch((error) => console.log(error));
    }
}
