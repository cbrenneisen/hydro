/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import './PatientScene.css';
import EHRSummary from "./components/EHRSummary";
import FluidAction from "./components/FluidAction";
import VitalSigns from "./components/VitalSigns";
import ProblemList from "./components/ProblemList";
import LabResults from "./components/LabResults";
import PatientService from "../../utility/PatientService"
import Patient from "../../utility/Patient"

export default class PatientScene extends Component {
    constructor(props){
        super(props);

        this.state = { name: ""}
    }
    componentWillMount(){

        let info = PatientService.patient_info(this.props.match.params.patientID);
        let patient = new Patient(this.props.match.params.patientID);
        patient.setup();

        this.setState ({
            name: info.name,
            patient: patient
        })
    }
    render() {

        return (
            <div id="patient-screen">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                                <h1>{this.state.name}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-0">
                                <EHRSummary patient={this.state.patient} />
                            </div>
                            <div className="visible-xs visible-sm col-xs-12">
                                &nbsp;
                            </div>
                            <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
                                <FluidAction patient={this.state.patient}/>
                            </div>
                        </div>
                        <div className="row findings-row">
                            <div className="col-xs-12 col-md-6">
                                <VitalSigns mrn={this.props.match.params.patientID} patient={this.state.patient}/>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <LabResults mrn={this.props.match.params.patientID} patient={this.props.patient}/>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <ProblemList mrn={this.props.match.params.patientID} patient={this.props.patient}/>
                            </div>
                        </div>
                    </div>
                </div>
        );
  }
}
