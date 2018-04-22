import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
   <header>
      <table>
         <tr>
            <td>
               <Link to="/">Rate Your Escape</Link>
            </td>
            <td>
               <Link to="/helloworld">Hello World</Link>
            </td>
            <td>
               <Link to="/stars">Stars</Link>
            </td>
            <td>
               <Link to="/textbox">TextBox</Link>
            </td>
            <td>
               <Link to="/dropdown">Dropdown</Link>
            </td>
            <td>
               <Link to="/roomviewer">RoomViewer</Link>
            </td>
            <td>
               <Link to="/roomlocationviewer">RoomLocationViewer</Link>
            </td>
         </tr>
      </table>
      <hr />
      
   </header>
);

export default Header;
