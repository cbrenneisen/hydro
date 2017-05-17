/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class LabResults extends Component {
    render() {
        return (
           <FindingsWidget endpoint="lab" header="Lab Results" mrn={this.props.mrn}/>
        )

    }
}