import React from 'react';

export default props => {
  const toggleCheckbox = () => {
    const { label, handleCheckboxChange } = props;
    handleCheckboxChange(label.id);
  };

  return (
    <label className="catalog-filter-checkbox-container">
      <input
        type="checkbox"
        checked={props.checkedOption === props.label.id}
        onChange={toggleCheckbox}
      />
      <span className="catalog-filter-checkbox-checkmark"></span>
      {props.label.name}
    </label>
  );
};
