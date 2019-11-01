import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => (
  <div className="App_label-group App_filter">
    <label htmlFor="filter">Filter:</label>
    <input id="filter" onChange={props.handleChange} value={props.value} />
  </div>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Filter;
