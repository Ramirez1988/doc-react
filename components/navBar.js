import React from 'react';

function NavBar(props) {
  return (

  <div class="nav-bar">
	  <nav class="intro">    
		<img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" width="268" height="33"/>
     <ul className="list-link">
     {props.menu.map(el=><li className="dropdown-link"><a className="test">{el.title}</a>
     {!el.drop?null:<ul className="list-dropdown-link">{el.drop.map(el=>            
      <li className="dropdown-menu"><a>{el}</a></li>)}                 
      </ul>}
    </li>)}
   </ul>
   </nav>
   </div>
  );
}
export default NavBar;
