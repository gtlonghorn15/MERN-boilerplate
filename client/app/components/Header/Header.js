import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
   <header>
      <table>
         <tr>
            <td>
               <Link to="/roomviewer">Rate Your Escape</Link>
            </td>
            <td>
               <Link to="/submitroom">Submit Room</Link>
            </td>
         </tr>
      </table>
      <hr />
      
   </header>
);

export default Header;
