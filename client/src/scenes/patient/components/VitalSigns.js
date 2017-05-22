/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class VitalSigns extends Component {
    constructor(props){
        super(props);

        let options = [ {label: "Temperature", value: "TEMP", type: "Number"},
                        {label: "Respiratory Rate", value: "RESP_RATE", type: "Number"},
                        {label: "Pulse", value: "PULSE", type: "Number"},
                        {label: "Pulse Ox", value: "PULSE_OX", type: "Number"},
                        {label: "Altered Location", value: "ALTERED_LOC", type: "Bool"},
                        {label: "Systolic Blood Pressure", value: "SBP", type: "Number"},
                        {label: "Diastolic Blood Pressure", value: "DBP", type: "Number"},
                        {label: "Capillary Refill", value: "CAPILLARY_REFILL", type: "Number"},
                        {label: "Urine Output", value: "URINE_OUTPUT", type: "Number"},
                        {label: "Oxygen Required", value: "O2_REQUIREMENT", type: "Number"},
                        {label: "NPO", value: "NPO", type: "Bool"},
                        {label: "Renal/Hepatic Insufficiencies", value: "RHI", type: "Bool"}];

        this.state = {
            entries: this.props.patient.vitals,
            options: options
        }
    }
    render() {
        return (
           <FindingsWidget endpoint="vital" header="Vital Signs & Findings" entries={this.state.entries}
                           options={this.state.options} patient={this.props.patient}/>
        )

    }
}