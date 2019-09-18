import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AgeInput from './AgeInput';
import { configAge } from '../../actions/actionCreators';

import backArrow from '../../assets/back_arrow.svg';

class Age extends React.Component {
  state = {
    ageValue: { min: 1, max: 3 },
  };

  submitAge = () => {
    const { ageValue } = this.state;
    this.props.configAge(ageValue);
    if (this.props.goal === 1) {
      this.props.history.push('/catalog/register');
    } else {
      this.props.history.push('/catalog');
    }
  };

  onAgeValueChange = ageValue => this.setState({ ageValue });

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { ageValue } = this.state;

    if (!this.props.sex) return <Redirect to="/catalog" />;
    return (
      <div className="catalog-wrapper">
        <div className="catalog-config-breed-navigation">
          <button
            onClick={this.goBack}
            className="catalog-goback-button"
          >
            <img src={backArrow} alt="back" />
          </button>
          <h2>Предпочитаемый возраст</h2>
          <div style={{ color: '#AEAEAE' }}>
            <span style={{ color: '#000' }}>4</span>/4
          </div>
        </div>
        <div className="catalog-config-age-block">
          <AgeInput
            ageValue={ageValue}
            modifyAgeValue={this.onAgeValueChange}
          />
          <button
            onClick={this.submitAge}
            className="catalog-config-submit"
          >
            Далее
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ catalog: { goal, sex, age } }) => ({
    goal,
    sex,
    age,
  }),
  { configAge },
)(Age);
