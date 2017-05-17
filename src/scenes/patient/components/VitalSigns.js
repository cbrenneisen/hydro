/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class VitalSigns extends Component {
    render() {
        return (
           <FindingsWidget endpoint="vital" header="Vital Signs & Findings"
                           mrn={this.props.mrn} patient={this.props.patient}/>
        )

    }
}