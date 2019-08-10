import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../index.css';
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
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      </ul>
  </div>
);



export default Navigation;
