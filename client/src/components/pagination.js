import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/action";
import { NUMBER_OF_ROWS } from "../const";

const Pagination = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.filterState.mainData)
    const page = useSelector(state => state.pageState);
    const numOfPage = Math.ceil(data.length / NUMBER_OF_ROWS);
    
    useEffect(() => { // checking for correct operation of pagination
        if (page > numOfPage) {
            dispatch(changePage(numOfPage)) 
        }
        if (numOfPage !== 0 && page === 0) {
            dispatch(changePage(1))
        }
    }, [dispatch, numOfPage, page])
    
    return(
        <div className="pagination">
            <div className="pagination__page">
                <span>{page}</span>
                <span>/</span>
                <span>{numOfPage}</span>
            </div>
            <div className="pagination__buttons">
                <button
                    className="back-btn"
                    onClick={() => dispatch(changePage(page - 1))}
                    disabled={(page <= 1 ? true : false)}
                >Back</button>
                <button
                    className="next-btn"
                    onClick={() => dispatch(changePage(page + 1))}
                    disabled={(page === numOfPage ? true : false)}
                >Next</button>
            </div>
        </div>
    );
}

export default Pagination;