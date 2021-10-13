import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ userData }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">
            '
            {userData.displayName === null
              ? userData.uid
              : userData.displayName}
            '의 Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
