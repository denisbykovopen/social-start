import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../index.css';
import LoginImg from '../../assets/login_register.svg';
import Subscribers from '../../assets/menu_manufacturers_small.svg';
import Reviews from '../../assets/menu_my_review.svg';
import Favorites from '../../assets/menu_featured_small.svg';
import HelpIn from '../../assets/help_in_choosing_a_kitten.svg';
import Complain from '../../assets/complain_small.svg';
import YouTube from '../../assets/youtube.svg';
import DropDown from './DropDown';
import Exit from '../../assets/exit.svg';
import HelpSupport from '../../assets/help_and_support.svg';
import SettingPrivacy from '../../assets/settings_and_privacy.svg';

const Menu = () => (
  <div className="menu">
    <ul className="menu-ul">
      <li>
        <NavLink to={ROUTES.SIGN_IN}>
          <img src={LoginImg} alt="LoginImg" />
          Войти/Зарегистрироваться
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.SUBSCRIBERS}>
          <img src={Subscribers} alt="Subscribers" />
          Мои подписчики
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.REVIEWS}>
          <img src={Reviews} alt="Reviews" />
          Мои отзывы
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.FAVORITES}>
          <img src={Favorites} alt="Favorites" />
          Мои избранные
        </NavLink>
      </li>
      <li>
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
        <a href="https://youtube.com">
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
        <a href="/">
          <img src={Exit} alt="Exit" />
          Выход
        </a>
      </li>
    </ul>
  </div>
);



export default Menu;
