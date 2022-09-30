import {
    ADD_DATA,
    CHANGE_PAGE,
    SELECT_COLUMN,
    SELECT_CONDITION,
    SELECT_VALUE
} from "./action";
import { combineReducers } from 'redux';
import { getFilteredData } from "../utils";
import { CONDITION, COLUMNS } from "../const";

export function pageState(state = 1, action) { // pagination
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page;
        default:
            return state;
    }
}

export let savedData = [];

const defaultState = {
    mainData: [],
    column: COLUMNS.NAME,
    condition: CONDITION.EQUAL,
    value: [''],
}

export function filterState(state = defaultState, action) { 
    switch (action.type) {
        case ADD_DATA: // case for fetching data from the database
            savedData = action.data;
            return {
                ...state,
                mainData: action.data
            }
        case SELECT_COLUMN: // state for column filter
            state.condition = (action.column === COLUMNS.NAME ? CONDITION.EQUAL : state.condition);
            state.column = action.column;
            state.value = (action.column === COLUMNS.NAME ? state.value : Number(state.value));
            return {
                ...state,
                mainData: getFilteredData(state)
            }
        case SELECT_CONDITION: // state for condition filter
            state.condition = action.condition;
            return {
                ...state,
                mainData: getFilteredData(state)
            } 
        case SELECT_VALUE: // state for value filter
            state.value = (state.column === COLUMNS.NAME
                ? [action.value[0]]
                : [Number(action.value[0]), Number(action.value[1])]
            )
            return {
                ...state,
                mainData: getFilteredData(state),
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    pageState,
    filterState
})
export default rootReducer;