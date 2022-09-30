import { savedData } from './redux/reduce';
import { CONDITION, NUMBER_OF_ROWS } from './const';

export function getFilteredData(filterState) { // filtering by condition
    const { column, condition, value } = filterState;
    const columnLow = column.toLowerCase();
    const firstValue = value[0] || -1e10;
    const secondValue = value[1] || 1e10;
    if (firstValue === -secondValue)
        return savedData;
    switch (condition) {
        case CONDITION.GREATER:
            return savedData.slice().filter((flight) => {
                if (flight[columnLow] > firstValue) {
                    return flight;
                }
                return null;
            })
        case CONDITION.LESSER:
            return savedData.slice().filter((flight) => {
                if (flight[columnLow] < firstValue) {
                    return flight;
                }
                return null;
            })
        case CONDITION.EQUAL: 
            return savedData.slice().filter((flight) => {
                if (isNumber(firstValue)) {
                    if (flight[columnLow] - firstValue === 0) {
                        return flight;
                    }
                    return null;
                }
                const flightValue = flight[columnLow].toLowerCase();
                const inputValue = firstValue.toLowerCase();
                if (flightValue.includes(inputValue)) {
                    return flight;
                }
                return null;
            })
        case CONDITION.CONTAINS:
            return savedData.slice().filter((flight) => {
                if (flight[columnLow] >= firstValue && flight[columnLow] <= secondValue) {
                    return flight;
                }
                return null;
            })
        default:
            return savedData;
    }
}

function isNumber(value) {
    if (typeof (value) === 'number') {
        return true;
    }
    return false;
}

export function getPage(data, page) {
    return data.slice((page - 1) * NUMBER_OF_ROWS, page * NUMBER_OF_ROWS);
}
