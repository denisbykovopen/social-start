import React from 'react';
import Avatar from './Avatar';
import ImageBG from './ImageBG';
import UserDetails from './UserDetails';

import ReviewsColor from '../../Assets/reviews.svg';
import SubscribersColor from '../../Assets/manufacturers-1.svg';
import FavoritesColor from '../../Assets/featured.svg';
import * as ROUTES from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import Gallery from './Gallery';
import PostFeed from './PostsFeed';

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
      <Gallery />
      <div className="plank"></div>
      <PostFeed />
    </div>
  </div>
);

export default UserPage;
