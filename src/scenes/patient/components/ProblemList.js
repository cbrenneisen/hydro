/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class ProblemList extends Component {
    constructor(props){
        super(props);

        let options = [ {label: "Urinary Tract Infection", value: "UTI", type: "Bool"},
                        {label: "Bipolar Disorder", value: "BIPOLAR", type: "Bool"},
                        {label: "HyperTension", value: "HYPERTENSION", type: "Bool"},
                        {label: "Diabetes Type II", value: "DIABETIC", type: "Bool"},
                        {label: "Spontaneous bacterial peritonitis", value: "SBP", type: "Bool"}];
        this.state = {
            entries: this.props.patient.problems,
            options: options
        }
    }
    render() {
        return (
           <FindingsWidget endpoint="problems" header="Problem List" entries={this.state.entries}
                           options={this.state.options} patient={this.props.patient}/>
        )

    }
}