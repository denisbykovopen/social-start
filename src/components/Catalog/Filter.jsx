import React from 'react';
import { connect } from 'react-redux';
import FilterObject from './FilterObject';
import AgeInput from './AgeInput';
import {
  configRegistration,
  configAge,
  configBreed,
  configSex,
  getCatalogPosts,
} from '../../actions/actionCreators';
import apiURL from '../../constants/apiURL';

const Filter = ({
  breed,
  sex,
  age,
  ageValues,
  breeds,
  sexes,
  configBreed,
  configSex,
  configAge,
  closeFilter,
  getCatalogPosts,
}) => (
  <div className="catalog-filter">
    <div className="catalog-filter-header">
      <button className="catalog-filter-back" onClick={closeFilter}>
        <svg width="7" height="12" style={{ marginRight: 5 }}>
          <path
            d="M6.35119 1.67288L6.35112 1.67295L1.99185 5.99524L6.35119 10.3261C6.52929 10.503 6.52929 10.7906 6.35119 10.9676C6.17346 11.1441 5.88506 11.1441 5.70733 10.9676L1.03372 6.32453C0.945182 6.23657 0.90015 6.12478 0.90015 6.00378C0.90015 5.8927 0.944291 5.77187 1.03372 5.68303L5.70631 1.041C5.8842 0.854488 6.17344 0.854783 6.35119 1.03138C6.52929 1.20831 6.52929 1.49595 6.35119 1.67288Z"
            fill="#AEAEAE"
            stroke="#AEAEAE"
            strokeWidth="0.2"
          />
        </svg>
        Назад
      </button>
      <div className="catalog-filter-title">Фильтр</div>
    </div>
    <div className="catalog-filter-options">
      <FilterObject
        title={breeds.label}
        labels={breeds}
        checkedOptionId={breed}
        updateParam={configBreed}
      />
      <FilterObject
        title={sexes.label}
        labels={sexes}
        checkedOptionId={sex}
        updateParam={configSex}
      />
      <FilterObject title={age.label}>
        <AgeInput ageValue={ageValues} modifyAgeValue={configAge} />
      </FilterObject>
      <FilterObject title="Страна" labels={[]} />
    </div>
    <div className="catalog-filter-footer">
      <button
        onClick={() => getCatalogPosts(apiURL)}
        className="catalog-filter-footer-button submit"
      >
        Показать
      </button>
      <button className="catalog-filter-footer-button cancel">
        Сбросить
      </button>
    </div>
  </div>
);

const mapStateToProps = ({
  catalog: {
    goal,
    breed,
    sex,
    age: ageValues,
    configData: { breeds, sexes, age },
  },
}) => ({ goal, breeds, sexes, age, ageValues, breed, sex });

export default connect(
  mapStateToProps,
  {
    configRegistration,
    configBreed,
    configSex,
    configAge,
    getCatalogPosts,
  },
)(Filter);
