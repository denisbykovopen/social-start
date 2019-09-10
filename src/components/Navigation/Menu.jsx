import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../index.css';
import LoginImg from '../../Assets/login_register.svg';
import Subscribers from '../../Assets/menu_manufacturers_small.svg';
import Reviews from '../../Assets/menu_my_review.svg';
import Favorites from '../../Assets/menu_featured_small.svg';
import HelpIn from '../../Assets/help_in_choosing_a_kitten.svg';
import Complain from '../../Assets/complain_small.svg';
import YouTube from '../../Assets/youtube.svg';
import DropDown from './DropDown';
import Exit from '../../Assets/exit.svg';
import HelpSupport from '../../Assets/help_and_support.svg';
import SettingPrivacy from '../../Assets/settings_and_privacy.svg';

const Menu = () => (
  <div className="menu">
    <ul className="menu-ul">
      <li className="menu-ul-li-white">
        <NavLink to={ROUTES.SIGN_IN} >
          <img src={LoginImg} alt="LoginImg" />
          Войти/Зарегистрироваться
        </NavLink>
      </li>
      <li className="menu-ul-li-white">
        <NavLink to={ROUTES.SUBSCRIBERS}>
          <img src={Subscribers} alt="Subscribers" />
          Мои подписчики
        </NavLink>
      </li>
      <li className="menu-ul-li-white">
        <NavLink to={ROUTES.REVIEWS}>
          <img src={Reviews} alt="Reviews" />
          Мои отзывы
        </NavLink>
      </li>
      <li className="menu-ul-li-white">
        <NavLink to={ROUTES.FAVORITES}>
          <img src={Favorites} alt="Favorites" />
          Мои избранные
        </NavLink>
      </li>
      <li className="menu-li-blue">
        <NavLink to={ROUTES.CATALOG}>
          <img src={HelpIn} alt="HelpIn" />
          Помощь в подборе котенка
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.SUPPORT}>
          <img src={Complain} alt="Complain" />
          Пожаловаться
        </NavLink>
      </li>
      <li>
        <a href="">
          <img src={YouTube} alt="YouTube" />
          <span>Видео о проекте</span>
        </a>
      </li>
      <li>
        <DropDown
          title="Справка и поддержка"
          firstItem="Справка"
          secondItem="Поддержка"
          toFirst={ROUTES.FAQ}
          toSecond={ROUTES.SUPPORT}
          src={HelpSupport}
        />
      </li>
      <li>
        <DropDown
          title="Настройки и конфиденциальность"
          firstItem="Настройки"
          secondItem="Конфиденциальность"
          toFirst={ROUTES.SETTINGS}
          toSecond={ROUTES.TERMS}
          src={SettingPrivacy}
        />
      </li>
      <li>
        <a>
          <img src={Exit} alt="Exit" />
          Выход
        </a>
      </li>
    </ul>
  </div>
);



export default Menu;
