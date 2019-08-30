import React, {Component} from 'react';
import BurgerMenu from '../../Assets/burger_menu.svg';
import CloseMenu from '../../Assets/close_menu.svg';
import Menu from './Menu';

export default class MenuButton extends Component {
    state = {
        toggle: false,
    };
    onToggle = () => {
        this.setState(prevState => ({
          toggle: !prevState.toggle,
        }));
    }
    render() {
        return(
            <React.Fragment>
                    <button
                        onClick={this.onToggle}
                        style={{
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer'
                        }}
                    >
                          <img
                              src={
                                  this.state.toggle
                                  ?CloseMenu
                                  :BurgerMenu
                              }
                              alt="Menu"
                              className="menu-img"
                              
                          />
                    </button>
                    <div
                        className={
                            this.state.toggle 
                            ? "dimmed-menu-bg" 
                            : "menu-bg"
                        }
                    >
                        <div
                            className={
                                this.state.toggle
                                ?"menu-open"
                                :"menu-close"
                            }
                        >
                            <Menu />
                        </div>
                    </div>
                    
            </React.Fragment>
        );
    }
}