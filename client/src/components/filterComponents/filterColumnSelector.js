import React from "react";
import { COLUMNS } from "../../const";
import { selectColumn } from "../../redux/action";
import { useDispatch } from "react-redux";

const FilterColumnSelector = () => {
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        const column = event.target.value;
        dispatch(selectColumn(column));
    }
    return (
        <>
            <select name="column-selector" id="column-selector" onChange={handleOnChange}> 
                {Object.values(COLUMNS).map(column => {
                    if (column === COLUMNS.DATE) return null;
                    return <option value={column} key={column}>{column}</option>
                })}
            </select>
        </>
    );
}

export default FilterColumnSelector;