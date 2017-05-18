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
        <button type="button" className="btn btn-default btn-md">
            <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
        </button>
        </Link>
        <h1>{patient}</h1>
    </div>
  )
};

export default Header;