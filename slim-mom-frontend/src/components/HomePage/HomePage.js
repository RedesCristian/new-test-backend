import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">SlimMom</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <h1>Bine ai venit pe SlimMom!</h1>
    </div>
  );
}

export default HomePage;
