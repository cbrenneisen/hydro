/**
 * Created by cbrenneisen on 5/17/17.
 */

import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = (props) => {
  const {patient} = props;
  return (
    <div id="header">
        <Link to="/hydro">
            <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
        </Link>
        <h1>{patient}</h1>
    </div>
  )
};

export default Header;