import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import { configRegistration } from '../../actions/actionCreators';

import backArrow from '../../assets/back_arrow.svg';

class Registration extends React.Component {
  options = [
    { value: 'first', label: 'Первая система' },
    { value: 'second', label: 'Вторая система' },
    { value: 'third', label: 'Третья система' },
  ];

  state = {
    selectedOption: this.options[0],
  };

  handleSelect = selectedOption => {
    this.setState({ selectedOption });
  };

  submitOption = () => {
    this.props.configRegistration(this.state.selectedOption.value);
    this.props.history.push('/catalog');
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { selectedOption } = this.state;

    if (this.props.goal !== 1) return <Redirect to="/catalog" />;
    return (
      <div className="catalog-wrapper">
        <div className="catalog-config-breed-navigation">
          <button
            onClick={this.goBack}
            className="catalog-goback-button"
          >
            <img src={backArrow} alt="back" />
          </button>
          <h2>Система регистрации питомника</h2>
          <div />
        </div>
        <Select
          value={selectedOption}
          onChange={this.handleSelect}
          options={this.options}
          isSearchable
          className="catalog-registration"
          classNamePrefix="catalog-registration"
          noOptionsMessage={() => 'Не найдено'}
        />
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={this.submitOption}
            className="catalog-config-submit"
            style={{ padding: '13px 50px' }}
          >
            Подобрать
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ catalog: { goal } }) => ({ goal });

export default connect(
  mapStateToProps,
  { configRegistration },
)(Registration);
