import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../index.css';
import Logo from '../../Assets/logo_mob.svg';
import Catalog from '../../Assets/configurator_menu.svg';
import Search from '../../Assets/search_menu.svg';
import UserAvatar from '../../Assets/empty-avatar.svg';
import Notifications from '../../Assets/alert_menu.svg';
import MenuButton from './MenuButton';


// import * as ROLES from '../../constants/roles';

// const Navigation = ({ authUser }) =>
//   authUser ? (
//     <NavigationAuth authUser={authUser} />
//   ) : (
//     <NavigationNonAuth />
//   );

// const NavigationAuth = ({ authUser }) => (
//   <ul>
//     <li>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.HOME}>Home</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.ACCOUNT}>Account</Link>
//     </li>
//     {!!authUser.roles[ROLES.ANOTHER] && (
//       <li>
//         <Link to={ROUTES.ANOTHER}>Admin</Link>
//       </li>
//     )}
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
// );

const Navigation = () => (
  <div
    className="header-nav"
  >
    <ul
      className="header-nav-li"  
    >
      <li>
        <NavLink exact
          to={ROUTES.LANDING}
        >
          <img
            src={Logo}
            alt="Logo"
          />
        </NavLink>
      </li>
      <li>
        <NavLink 
          to={ROUTES.CATALOG}
        >
          <img
            src={Catalog}
            alt="Catalog"
          />
        </NavLink>
      </li>
      <li>
        <NavLink 
          to={ROUTES.SEARCH}
        >
          <img
            src={Search}
            alt="Search"
          />
        </NavLink>
      </li>
      <li>
        <NavLink 
          to={ROUTES.USER}
        >
          <img
            src={UserAvatar}
            alt="Avatar"
          />
        </NavLink>
      </li>
      <li>
          <img
            src={Notifications}
            alt="Notifications"
          />
      </li>
      <li>
          <MenuButton />
      </li>
    </ul>
  </div>
);



export default Navigation;
