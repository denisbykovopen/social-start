import React from 'react';
import Checkbox from './Checkbox';

import caretDown from '../../assets/caret-down.svg';
import caretUp from '../../assets/caret-up.svg';

export default class extends React.Component {
  state = {
    isOpen: false,
  };

  toggleFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="catalog-filter-object-wrapper">
        <div
          className="catalog-filter-object"
          onClick={this.toggleFilter}
        >
          <div className="catalog-filter-object-title">
            {this.props.title}
          </div>
          <img src={isOpen ? caretUp : caretDown} alt="caret" />
        </div>
        <div>
          {isOpen &&
            (this.props.children ? (
              <div>{this.props.children}</div>
            ) : (
              this.props.labels.map(label => (
                <Checkbox
                  key={label.id}
                  label={label}
                  handleCheckboxChange={this.props.updateParam}
                  checkedOption={this.props.checkedOptionId}
                />
              ))
            ))}
        </div>
      </div>
    );
  }
}
