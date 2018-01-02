import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
   <header>
      <Link to="/">Home</Link>

      <nav>
         <Link to="/helloworld">Hello World</Link>
      </nav>
      <nav>
         <Link to="/stars">Stars</Link>
      </nav>
      <nav>
         <Link to="/textbox">TextBox</Link>
      </nav>
      <nav>
         <Link to="/dropdown">Dropdown</Link>
      </nav>
      <nav>
         <Link to="/roomviewer">RoomViewer</Link>
      </nav>
      <nav>
         <Link to="/roomlocationviewer">RoomLocationViewer</Link>
      </nav>

      <hr />
   </header>
);

export default Header;
