import React from 'react';
import Avatar from './Avatar';
import ImageBG from './ImageBG';
import PhotoGallery from './PhotoGallery';
import UserDetails from './UserDetails';

import ReviewsColor from '../../Assets/reviews.svg';
import SubscribersColor from '../../Assets/manufacturers-1.svg';
import FavoritesColor from '../../Assets/featured.svg';
import * as ROUTES from '../../constants/routes';
import { NavLink } from 'react-router-dom';

const UserPage = () => (
  <div className="user-page">
    <div className="user-page-inner">
      <ImageBG />
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
      <PhotoGallery />
      <div className="plank"></div>
    </div>
  </div>
);

export default UserPage;
