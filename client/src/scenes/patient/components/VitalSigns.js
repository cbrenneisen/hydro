/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class VitalSigns extends Component {
    constructor(props){
        super(props);

        this.state = {
            entries: this.props.patient.vitals,
            options: []
        }
    }
    componentWillMount(){
        fetch("/api/findings/vitals")
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                   options: resp
                });
            });
    }
    render() {
        return (
           <FindingsWidget endpoint="vital" header="Vital Signs & Findings" entries={this.state.entries}
                           options={this.state.options} patient={this.props.patient}/>
        )

    }
}