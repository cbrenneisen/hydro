/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import './style/PatientRow.css';


export default class PatientRow extends Component {
  render() {

    const {patient} = this.props;
    const url = "/patient/" + patient.mrn;

    return (
        <Link to={url}>
            <li className="patient-row list-group-item">{patient.name}</li>
        </Link>
    );
  }
}

