/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class ProblemList extends Component {
    render() {
        return (
           <FindingsWidget endpoint="problems" header="Problem List" mrn={this.props.mrn}/>
        )

    }
}