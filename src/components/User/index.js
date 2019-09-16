import React from 'react';
import Avatar from './Avatar/index';
import ImageBg from './ImageBg/index';
import UserDetails from './UserDetails/index';

import ReviewsColor from '../../Assets/reviews.svg';
import SubscribersColor from '../../Assets/manufacturers-1.svg';
import FavoritesColor from '../../Assets/featured.svg';
import * as ROUTES from '../../constants/routes';
import { NavLink } from 'react-router-dom';

import PostFeed from './PostFeed/index';
import About from './About/index';
import Contacts from './Contacts/index';
import FourMedia from './FourMedia';

import './User.css';

const UserPage = () => (
  <div className="user-page">
    <div className="user-page-inner">
      <div className="plank"></div>
      <ImageBg />
      <Avatar />
      <UserDetails />
      <div className="user-nav">
        <li>
          <NavLink to={ROUTES.SUBSCRIBERS}>
            <img src={SubscribersColor} alt="Subscribers" />
            <span>Подписки</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.REVIEWS}>
            <img src={ReviewsColor} alt="Reviews" />
            <span>Отзывы</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.FAVORITES}>
            <img src={FavoritesColor} alt="Favorites" />
            <span>Избранные</span>
          </NavLink>
        </li>
      </div>

      <div className="plank"></div>
      <FourMedia />
      <div className="plank"></div>
      <About />
      <div className="plank"></div>
      <Contacts />
      <div className="plank"></div>
      <PostFeed />
      <div className="plank"></div>
    </div>
  </div>
);

export default UserPage;
