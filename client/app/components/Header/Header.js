import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
   <header>
      <Link to="/">Home</Link>
      <Link to="/helloworld">Hello World</Link>
      <Link to="/stars">Stars</Link>
      <Link to="/textbox">TextBox</Link>

      <hr />
   </header>
);

export default Header;
