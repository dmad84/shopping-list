
import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ errors }) => (
  <div className="col-12 alert alert-secondary">
    <ul>
     {errors.length > 0 && errors.map((error, index) => <li key={index}>{error}</li>)}
    </ul>
  </div>
);

Errors.propTypes = {
  errors: PropTypes.array.isRequired
};
Errors.defaultProps = {
  errors: []
};
export default Errors;