/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class LabResults extends Component {
    constructor(props){
        super(props);

        let options = [ {label: "White Blood Cell Count", value: "WBC", type: "Number"},
                        {label: "Potassium", value: "K", type: "Number"},
                        {label: "Sodium", value: "Na", type: "Number"},
                        {label: "Glucose", value: "GLUCOSE", type: "Number"},
                        {label: "Creatinine", value: "CREATININE", type: "Number"}];


        this.state = {
            entries: this.props.patient.lab_results,
            options: options
        }
    }
    render() {
        return (
           <FindingsWidget endpoint="lab" header="Lab Results" entries={this.state.entries}
                           options={this.state.options} patient={this.props.patient}/>
        )

    }
}