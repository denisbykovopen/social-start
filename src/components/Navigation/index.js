import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './Navigation.css';
import Logo from '../../assets/logo_mob.svg';
import Catalog from '../../assets/configurator_menu.svg';
import Search from '../../assets/search_menu.svg';
import UserAvatar from '../../assets/empty-avatar.svg';
import Notifications from '../../assets/alert_menu.svg';
import MenuButton from './MenuButton';

const Navigation = () => (
  <div className="header-nav">
    <ul className="header-nav-li">
      <li>
        <NavLink exact to={ROUTES.LANDING}>
          <img src={Logo} alt="Logo" />
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.CATALOG}>
          <img src={Catalog} alt="Catalog" />
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.SEARCH}>
          <img src={Search} alt="Search" />
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.USER}>
          <img src={UserAvatar} alt="Avatar" />
        </NavLink>
      </li>
      <li>
        <img src={Notifications} alt="Notifications" />
      </li>
      <li>
        <MenuButton />
      </li>
    </ul>
  </div>
);

export default Navigation;
