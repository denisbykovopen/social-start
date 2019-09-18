import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default ({ ageValue, modifyAgeValue }) => {
  const setMinAge = ({ target: { value } }) => {
    if (value === '') {
      modifyAgeValue({ ...ageValue, min: '' });
      return;
    }

    if (!+value || value > ageValue.max || value.length > 1) {
      modifyAgeValue({ ...ageValue, min: 1 });
      return;
    }

    modifyAgeValue({ ...ageValue, min: +value });
  };

  const setMaxAge = ({ target: { value } }) => {
    if (value === '') {
      modifyAgeValue({ ...ageValue, max: '' });
      return;
    }

    if (!+value || value < ageValue.min || value.length > 1) {
      modifyAgeValue({ ...ageValue, max: 3 });
      return;
    }

    if (+value > 8) {
      modifyAgeValue({ ...ageValue, max: 8 });
      return;
    }

    modifyAgeValue({ ...ageValue, max: +value });
  };

  return (
    <div style={{marginBottom: 30}}>
      <div className="catalog-config-age-inline-input-container">
        <div className="catalog-config-age-inline-input-block">
          <span>от</span>
          <input
            value={ageValue.min}
            onChange={setMinAge}
            maxLength="1"
          />
          <span>мес</span>
        </div>
        <div className="catalog-config-age-inline-input-block">
          <span>до</span>
          <input
            value={ageValue.max}
            onChange={setMaxAge}
            maxLength="1"
          />
          <span>мес</span>
        </div>
      </div>
      <div style={{ marginTop: 25 }}>
        <InputRange
          maxValue={8}
          minValue={1}
          allowSameValues
          value={{
            min: ageValue.min || 1,
            max: ageValue.max || 3,
          }}
          onChange={modifyAgeValue}
        />
      </div>
    </div>
  );
};
