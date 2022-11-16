import React from "react";
import helpdeskHeader from "../img/helpdesk.png"

function Header(){
  return(
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={helpdeskHeader} alt="A cartoon helpdesk worker" />
    </React.Fragment>
    
  );
}

export default Header;