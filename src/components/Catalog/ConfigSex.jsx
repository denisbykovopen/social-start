import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ConfigList from './ConfigList';
import { configSex } from '../../actions/actionCreators';

import backArrow from '../../assets/back_arrow.svg';
import maleCatImg from '../../assets/maleCat.svg';
import femaleCatImg from '../../assets/femaleCat.svg';
import allCatSexesImg from '../../assets/allCatSexes.svg';

const Sex = props => {
  const submitSex = sexId => {
    props.configSex(sexId);
    props.history.push('/catalog/age');
  };

  const goBack = () => {
    props.history.goBack();
  };

  if (!props.goal) return <Redirect to="/catalog" />;
  return (
    <div className="catalog-wrapper">
      <div className="catalog-config-breed-navigation">
        <button onClick={goBack} className="catalog-goback-button">
          <img src={backArrow} alt="back" />
        </button>
        <h2>{props.sexes.label}</h2>
        <div style={{ color: '#AEAEAE' }}>
          <span style={{ color: '#000' }}>3</span>/4
        </div>
      </div>
      <ConfigList list={props.sexes} submit={submitSex} />
    </div>
  );
};

export default connect(
  ({ catalog: { goal, sex, configData: {sexes} } }) => ({ goal, sex, sexes }),
  { configSex },
)(Sex);
