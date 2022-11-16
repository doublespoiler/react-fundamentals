import React from "react";
import PropTypes from "prop-types";

export default function Ticket(props){
  return (
    <React.Fragment>
      {/* notice the div surrounds the entire ticket, and has the whenTicketClicked method on it */}
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, 
  whenTicketClicked: PropTypes.func 
};


