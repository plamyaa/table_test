import React from "react";
import { selectCondition } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { COLUMNS, CONDITION } from "../../const";

const FilterConditionSelector = () => {
    const dispatch = useDispatch();
    const filterState = useSelector(state => state.filterState);
    const { column, condition } = filterState

    const handleOnChange = (event) => {
        const condition = event.target.value;
        dispatch(selectCondition(condition));
    }
    return (
        <>
            <select
                name="type-selector"
                id="type-selector"
                disabled={column === COLUMNS.NAME ? true : false}
                onChange={handleOnChange}
                value={condition}
            >
                {
                    column === COLUMNS.NAME
                        ? <option>Equal</option>
                        : Object.values(CONDITION).map(type => <option value={type} key={type}>{type}</option>)
                }
            </select>
        </>
    );
}

export default FilterConditionSelector;