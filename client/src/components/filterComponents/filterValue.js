import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { selectValue } from "../../redux/action";
import { COLUMNS, CONDITION } from "../../const";

const FilterValue = () => {
    const dispatch = useDispatch();
    const filterState = useSelector(state => state.filterState);
    const { column, condition, value } = filterState

    const handleFirstInput = (event) => {
        const newValue = event.target.value;
        dispatch(selectValue([newValue, value[1]]));
    }
    const handleSecondInput = (event) => { // works if (condition === "Contains")
        const newValue = event.target.value;
        dispatch(selectValue([value[0], newValue]));
    }
    return (
        <>
            <div className="filter-value">
                <input
                    className="input-text"
                    type={column === COLUMNS.NAME ? "text" : "number"}
                    placeholder={(condition === CONDITION.CONTAINS ? "From" : "")}
                    onChange={handleFirstInput}
                    value={value[0] || ''}
                />
                {(condition === CONDITION.CONTAINS
                    ? <input
                        className="input-text-2"
                        type="number"
                        placeholder="To"
                        onChange={handleSecondInput}
                        value={value[1] || ''}
                    />
                    : null)
                }
            </div>
        </>
    );
}

export default FilterValue;