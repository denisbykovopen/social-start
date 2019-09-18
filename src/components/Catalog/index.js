import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import Filter from './Filter';
import CatalogList from './CatalogList';
import { getConfigData } from '../../actions/actionCreators';
import HelpModal from '../Modals/HelpModal';
import withModal from '../../hoc/withModal';

import configCatImg from '../../assets/configCat.svg';
import individualCatImg from '../../assets/individualCat.svg';
import rateArrows from '../../assets/rateArrows.svg';
import filterCaret from '../../assets/filterCaret.svg';
import fullListView from '../../assets/fullListView.svg';
import shortListView from '../../assets/shortListView.svg';

const IndividualHelpButton = props => (
  <button
    onClick={props.toggleModal}
    className="catalog-topNav-button"
    style={{ marginTop: 8 }}
  >
    <img
      src={individualCatImg}
      style={{ marginRight: 5 }}
      alt="подбор"
    />
    Индивидуальний подбор
  </button>
);

const IndividualHelpButtonWithModal = withModal(IndividualHelpButton)(
  HelpModal,
);

class CatalogPage extends React.Component {
  state = {
    isFullView: true,
    isFilterOpen: false,
  };

  componentDidMount() {
    this.props.getConfigData();
  }

  toggleView = () => {
    const { isFullView } = this.state;
    this.setState({ isFullView: !isFullView });
  };

  closeFilter = () => {
    this.setState({ isFilterOpen: false });
  };

  render() {
    const { breed, goal, sex, age, loading, error } = this.props;
    const { isFullView, isFilterOpen } = this.state;

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    return (
      <div>
        {isFilterOpen && <Filter closeFilter={this.closeFilter} />}
        <div style={{padding: '20px 15px'}}>
          <div>
            <button
              className="catalog-topNav-button"
              onClick={() =>
                this.props.history.push('/catalog/breed')
              }
            >
              <img
                src={configCatImg}
                style={{ marginRight: 5 }}
                alt="конфигуратор"
              />
              Конфигуратор
            </button>
            <IndividualHelpButtonWithModal />
          </div>
          <div className="catalog-toolbar">
            <div className="catalog-toolbar-button-group">
              <button className="catalog-toolbar-button">
                <img
                  src={rateArrows}
                  style={{ marginRight: 5 }}
                  alt="rate"
                />
                По рейтингу
              </button>
              <button
                className="catalog-toolbar-button"
                onClick={() => this.setState({ isFilterOpen: true })}
              >
                <img
                  src={filterCaret}
                  style={{ marginRight: 5 }}
                  alt="filter"
                />
                Фильтр
              </button>
            </div>
            <button
              className="catalog-toolbar-view"
              onClick={this.toggleView}
            >
              <img
                src={isFullView ? fullListView : shortListView}
                alt="view"
              />
            </button>
          </div>
        </div>
        <CatalogList isFullView={isFullView} />
        <Switch>
          {!breed && <Redirect to="/catalog/breed" />}
          {!goal && <Redirect to="/catalog/goal" />}
          {!sex && <Redirect to="/catalog/sex" />}
          {!age && <Redirect to="/catalog/age" />}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({
  catalog: { breed, goal, sex, age, loading, error },
}) => ({
  loading,
  breed,
  goal,
  sex,
  age,
  error,
});

export default connect(
  mapStateToProps,
  { getConfigData },
)(CatalogPage);
