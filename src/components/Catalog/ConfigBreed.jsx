import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  configBreed,
  sortBreedsByPopular,
  sortBreedsByAlphabet,
} from '../../actions/actionCreators';
import ConfigList from './ConfigList';

import './catalog.css';
import backArrow from '../../assets/back_arrow.svg';

const Breed = props => {
  const submitBreed = breed => {
    props.configBreed(breed);
    props.history.push('/catalog/goal');
  };

  const goBack = () => {
    props.history.goBack();
  };

  if (!props.breeds) return <Redirect to="/catalog" />;
  return (
    <div className="catalog-wrapper">
      <div className="catalog-config-breed-navigation">
        <button onClick={goBack} className="catalog-goback-button">
          <img src={backArrow} alt="back" />
        </button>
        <h2>{props.breeds.label}</h2>
        <div style={{ color: '#AEAEAE' }}>
          <span style={{ color: '#000' }}>1</span>/4
        </div>
      </div>
      <div className="catalog-config-breed-sorting">
        <span style={{ marginRight: 24 }}>Сортировка</span>
        <div>
          <button
            onClick={props.sortBreedsByPopular}
            className="catalog-config-breed-sorting-button"
            style={{ marginRight: 10 }}
          >
            Популярные
          </button>
          <button
            onClick={props.sortBreedsByAlphabet}
            className="catalog-config-breed-sorting-button"
          >
            По алфавиту
          </button>
        </div>
      </div>
      <ConfigList
        list={props.breeds}
        submit={submitBreed}
        // loadMoreBreeds={loadMoreBreeds}
      />
    </div>
  );
};

export default connect(
  ({
    catalog: {
      breed,
      configData: { breeds },
    },
  }) => ({ breed, breeds }),
  { configBreed, sortBreedsByAlphabet, sortBreedsByPopular },
)(Breed);
