/**
 * Created by cbrenneisen on 5/5/17.
 */

import React, { Component } from 'react';
import PatientRow from "./PatientRow";
import 'whatwg-fetch';

import './style/PatientPicker.css';


export default class PatientPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patients: [],
        }
    }
    componentWillMount(){
        //TODO: use promises

        fetch("api/patients")
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                   patients: resp
                });
            });
    }
    search(event){
        let keyword = event.target.value;

        //filter out of the original list of patients
        let newPatients = this.props.patients.filter(function(patient){
            return patient.name.toLowerCase().includes(keyword.toLowerCase())
        });

        this.setState ({
            patients: newPatients
        })

    }render() {

        return (
            <div id="patient-picker-wrapper">
              <input type="text" onChange={this.search.bind(this)}
                     className="form-control patient-search" placeholder="Search By Name..."
                     aria-describedby="sizing-addon2" />
              <div id="patient-picker">
                  <ul className="list-group">
                      {this.state.patients.map((patient) => {
                        return <PatientRow patient={patient} key={patient.mrn}/>
                      })}
                  </ul>
              </div>
            </div>
        );
    }
}