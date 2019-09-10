import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ArrowDown from '../../Assets/arrow_down_gray.svg';
import ArrowUp from '../../Assets/arrow_up_gray.svg';
import { NavLink } from 'react-router-dom';


export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { showList: false };
  }

  switch = () => {
    this.setState(prevState => ({
      showList: !prevState.showList,
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="display" onClick={this.switch}>
          <img src={this.props.src} alt="HelpSupport" />
          <span>{this.props.title}</span>
          <img
            src={this.state.showList ? ArrowUp : ArrowDown}
            alt=" "
          />
        </div>
        <CSSTransition
          in={this.state.showList}
          timeout={200}
          classNames="list-transition"
          unmountOnExit
          appear
        >
          <div className="list-body">
            <ul className="list">
              <li className="list-item">
                <NavLink to={this.props.toFirst}>
                  {this.props.firstItem}
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink to={this.props.toSecond}>
                  {this.props.secondItem}
                </NavLink>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
