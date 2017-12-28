import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
	  </br>
	  <Link to="/starrating">Star Rating</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
