/**
 * Created by carlos.brenneisen on 5/18/17.
 */

import React, { Component } from 'react';
import './style/ChiefComplaint.css';

export default class FluidAction extends Component {
    constructor(props) {
        super(props);

        let options = [ {value: "NO",    label: "None"},
                        {value: "Shock", label: "Shock"},
                        {value: "TRAUMATIC_BRAIN", label: "Traumatic Brain Damage"},
                        {value: "TRAUMATIC_RESUSCITATION", label: "Traumatic Resuscitation"}];

        this.state = {
            options: options,
            question: this.props.question,
        };
    }
    updateQuestion(event) {

    }
    render(){

        return (
            <div id="chief-complaint" className="widget">
                <h4>Chief Complaint</h4>

                <select className="form-control"
                        onChange={this.updateQuestion.bind(this)} value={this.state.question}>
                    {this.state.options.map((entry) => {
                        return <option value={entry.value}>{entry.label}</option>
                    })}
                </select>
            </div>
        )
    }
}