/**
 * Created by cbrenneisen on 5/5/17.
 */

import React, { Component } from 'react';

import './style/PatientPicker.css';
import PatientRow from "./PatientRow";

export default class PatientPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patients: this.props.patients,
        }
    }
    search(event){
        var keyword = event.target.value;

        //filter out of the original list of patients
        var newPatients = this.props.patients.filter(function(patient){
            return patient.name.toLowerCase().includes(keyword.toLowerCase())
        });

        this.setState ({
            patients: newPatients
        })
    }
    render() {

        return (
            <div id="patient-picker-wrapper">
              <input type="text" onChange={this.search.bind(this)}
                     className="form-control patient-search" placeholder="Search By Name..."
                     aria-describedby="sizing-addon2" />
              <div id="patient-picker">
                  <ul className="list-group">
                      {this.state.patients.map((patient) => {
                        return <PatientRow patient={patient}/>
                      })}
                  </ul>
              </div>
            </div>
        );
    }
}