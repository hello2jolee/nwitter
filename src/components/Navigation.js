import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">
            {userObj.displayName === null ? "아무개" : userObj.displayName}'s
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
