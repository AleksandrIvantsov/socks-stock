import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="search">
      Find contacts by name
      <input type="text" id="search" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
