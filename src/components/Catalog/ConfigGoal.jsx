import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ConfigList from './ConfigList';
import { configGoal } from '../../actions/actionCreators';

import backArrow from '../../assets/back_arrow.svg';
import breedingImg from '../../assets/breeding.svg';
import forHomeImg from '../../assets/forhome.svg';
import allCatsImg from '../../assets/allcats.svg';

const Goal = props => {
  const submitGoal = goalId => {
    props.configGoal(goalId);
    props.history.push('/catalog/sex');
  };

  const goBack = () => {
    props.history.goBack();
  };

  if (!props.breed) return <Redirect to="/catalog" />;
  return (
    <div className="catalog-wrapper">
      <div className="catalog-config-breed-navigation">
        <button onClick={goBack} className="catalog-goback-button">
          <img src={backArrow} alt="back" />
        </button>
        <h2>{props.groups.label}</h2>
        <div style={{ color: '#AEAEAE' }}>
          <span style={{ color: '#000' }}>2</span>/4
        </div>
      </div>
      <ConfigList list={props.groups} submit={submitGoal} />
    </div>
  );
};

export default connect(
  ({
    catalog: {
      breed,
      goal,
      configData: { groups },
    },
  }) => ({ breed, goal, groups }),
  { configGoal },
)(Goal);
