import React from 'react';
import { useSelector } from "react-redux";
import { COLUMNS } from "../const";
import { getPage } from '../utils';

const Table = () => {
  const data = useSelector(state => state.filterState.mainData);
  const page = useSelector(state => state.pageState);
  return (
    <table border='1'>
      <tr>
        {Object.values(COLUMNS).map((column) => <th className="table-header" key={column}>{column}</th>)}
      </tr>
      {getPage(data.map((flight) => {
        return (
          <tr key={flight.id}>
            <th className="row-element">{flight.date.slice(0, 10)}</th>
            <th className="row-element">{flight.name}</th>
            <th className="row-element">{flight.amount}</th>
            <th className="row-element">{flight.distance}</th>
          </tr>
        );
      }), page)}
    </table>
  );
};

export default Table;