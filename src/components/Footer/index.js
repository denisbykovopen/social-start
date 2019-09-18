import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../index.css';
import LogoDesk from '../../assets/logo_Desk.svg';
import EmailSmall from '../../assets/email_small.svg';
import PhoneSmall from '../../assets/Связаться.svg';
import InstaSmall from '../../assets/instagram_small.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <img
          src={LogoDesk}
          alt="pets&friends"
          style={{
            height: '25px',
          }}
        />
        <ul className="footer-nav">
          <li>
            <Link to={ROUTES.CATALOG} activeStyle={{ color: 'grey' }}>
              Все предложения
            </Link>
          </li>
          <li>
            <Link to={ROUTES.BREEDER} activeStyle={{ color: 'grey' }}>
              Заводчики
            </Link>
          </li>
          <li>
            <Link to={ROUTES.CARRIER} activeStyle={{ color: 'grey' }}>
              Перевозчики
            </Link>
          </li>
          <li>
            <Link to={ROUTES.PRIVACY} activeStyle={{ color: 'grey' }}>
              Privacy policy
            </Link>
          </li>
          <li>
            <Link to={ROUTES.TERMS} activeStyle={{ color: 'grey' }}>
              Terms of use
            </Link>
          </li>
        </ul>
        <div className="footer-cluster">
          <div className="footer-cluster-row">
            <img src={PhoneSmall} alt="Phone" />
            <span>+38 (099) 756 14 14</span>
          </div>
          <div className="footer-cluster-row">
            <img src={EmailSmall} alt="Email" />
            <span>petsfriends@gmail.com</span>
          </div>
          <div className="footer-cluster-row">
            <span>Следите за нами</span>
            <a href="https://instagram.com">
              <img src={InstaSmall} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="sub-footer">
          <p>pets&friends,2019(c.)</p>
        </div>
      </div>
    );
  }
}
