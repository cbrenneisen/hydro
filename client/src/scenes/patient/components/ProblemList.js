/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import FindingsWidget from "./FindingsWidget";

export default class ProblemList extends Component {
    constructor(props){
        super(props);

        this.state = {
            entries: this.props.patient.problems,
            options: []
        }
    }
    componentWillMount(){
        fetch("/api/findings/problems")
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                   options: resp
                });
            });
    }
    render() {
        return (
           <FindingsWidget endpoint="problems" header="Problem List" entries={this.state.entries}
                           options={this.state.options} patient={this.props.patient}/>
        )
    }
}