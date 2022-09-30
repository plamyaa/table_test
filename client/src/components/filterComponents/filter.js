import React from "react";
import FilterColumnSelector from "./filterColumnSelector";
import FilterConditionSelector from "./filterConditionSelector";
import FilterValue from "./filterValue";

const Filter = () => {
    return (
        <div className="filter">
            <label htmlFor='column-selector'>Choose colunm:</label>
            <FilterColumnSelector />
            <label htmlFor='type-selector'>Choose type:</label>
            <FilterConditionSelector />
            <label htmlFor="input-text">Enter value:</label>
            <FilterValue />
        </div>
    );
}

export default Filter;