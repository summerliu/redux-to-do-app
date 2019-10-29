import React from 'react';
// import cx from "classnames";
import { connect } from 'react-redux';
import { set_filter } from "../redux/actions/action";

const VISIBILITY_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
};

const Filter = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
            const currentFilter = VISIBILITY_FILTERS[filterKey];
            return (
                <span
                key={`visibility-filter-${currentFilter}`}
                // className={cx(
                //     "filter",
                //     currentFilter === activeFilter && "filter--active"
                // )}
                onClick={() => {
                    set_filter(currentFilter);
                }}
                >
                {currentFilter}
                </span>
            );
            })}
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return { activeFilter: state.filter };
};

export default connect(
    mapStateToProps,
    { set_filter },
)(Filter);