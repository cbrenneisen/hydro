/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class LabResults extends Component {
    constructor(props){
        super(props);

        this.state = {
            entries: this.props.patient.lab_results,
            options: []
        }
    }
    componentWillMount(){
         fetch("/api/findings/lab")
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                   options: resp
                });
            });
    }
    render() {
        return (
           <FindingsWidget endpoint="lab" header="Lab Results" entries={this.state.entries}
                           options={this.state.options} patient={this.props.patient}/>
        )

    }
}