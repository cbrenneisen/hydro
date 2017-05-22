/**
 * Created by carlos.brenneisen on 5/18/17.
 */

import React, { Component } from 'react';
import './style/ChiefComplaint.css';

export default class FluidAction extends Component {
    constructor(props) {
        super(props);

        let id = 0;
        let options = [ {id: ++id, value: "NO",    label: "None"},
                        {id: ++id, value: "ABPAIN", label: "Abdominal Pain"},
                        {id: ++id, value: "COUGH", label: "Cough & Chest Pain"},
                        {id: ++id, value: "HEADACHE", label: "Headache"},
                        {id: ++id, value: "SHOCK", label: "Shock"},
                        {id: ++id, value: "TRAUMATIC_BRAIN", label: "Traumatic Brain Damage"},
                        {id: ++id, value: "TRAUMATIC_RESUSCITATION", label: "Traumatic Resuscitation"}];

        this.state = {
            options: options,
            question: this.props.question,
        };
    }
    updateQuestion(event)
    {
        this.props.patient.removeAnswer(this.state.question);

        this.state = {
            question: event.target.value
        };

        this.props.patient.update(event.target.value, "YES");

    }
    render(){

        return (
            <div id="chief-complaint" className="widget">
                <h4>Chief Complaint</h4>

                <select className="form-control"
                        onChange={this.updateQuestion.bind(this)} value={this.state.question}>
                    {this.state.options.map((entry) => {
                        return <option key={entry.id} value={entry.value}>{entry.label}</option>
                    })}
                </select>
            </div>
        )
    }
}