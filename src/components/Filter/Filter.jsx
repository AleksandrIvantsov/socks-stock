import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange, onReset }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="search">
        Пошук за назвою:
        <input type="text" id="search" value={value} onChange={onChange} />
      </label>
      <button type="button" onClick={onReset}>
        Очистити
      </button>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
