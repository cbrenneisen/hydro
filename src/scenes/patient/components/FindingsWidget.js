/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import './style/FindingsWidget.css';
import FindingsEntry from "./FindingsEntry"
import FindingsService from '../../../utility/FindingsService'

let id = 0;
export default class FindingsWidget extends Component {
    constructor(props) {
        super(props);

        //defaults
        var type = "Findings";
        var endpoint = "problems";

        //props
        if (this.props.type !== undefined){
            type = this.props.type
        }
        if (this.props.endpoint !== undefined){
            endpoint = this.props.endpoint
        }

        this.state = {
            entries: [],
            options: [],
            type: type,
            endpoint: endpoint
        }
    }
    componentWillMount() {
        //get data here
        //TODO: switch this to a network call

        var options = [];
        var entries = [];
        if (this.state.endpoint === "problems") {

            options = [ {label: "Urinary Tract Infection", value: "UTI", type: "Bool"},
                        {label: "Bipolar Disorder", value: "BIPOLAR", type: "Bool"},
                        {label: "HyperTension", value: "HYPERTENSION", type: "Bool"},
                        {label: "Diabetes Type II", value: "DIABETIC", type: "Bool"},
                        {label: "Spontaneous bacterial peritonitis", value: "SBP", type: "Bool"}];

            FindingsService.problem_list(this.props.mrn).forEach(function(element) {
                entries.push({id: ++id, question: element.question, answer: element.answer})
            });

        }else if (this.state.endpoint === "vital"){

            options = [ {label: "Temperature", value: "TEMP", type: "Number"},
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

            FindingsService.vital_signs(this.props.mrn).forEach(function(element) {
                entries.push({id: ++id, question: element.question, answer: element.answer})
            });

        }else if (this.state.endpoint === "lab") {

            options = [ {label: "White Blood Cell Count", value: "WBC", type: "Number"},
                        {label: "Potassium", value: "K", type: "Number"},
                        {label: "Sodium", value: "Na", type: "Number"},
                        {label: "Glucose", value: "GLUCOSE", type: "Number"},
                        {label: "Creatinine", value: "CREATININE", type: "Number"}];

            FindingsService.lab_results(this.props.mrn).forEach(function(element) {
                entries.push({id: ++id, question: element.question, answer: element.answer})
            });
        }

        for (var i = 0; i < entries.length; i++){
            entries.id = ++id;
        }

        this.setState ({
            options: options,
            entries: entries
        })
    }
    addFinding(){

        var entries = this.state.entries;
        entries.push({id: ++id, answer: "", question: ""});

        this.setState ({
            entries: entries
        })
    }
    removeFinding(input, event){

        var entries = input.parent.state.entries;
        entries.splice(input.index, 1);

        input.parent.setState ({
            entries: entries
        })
    }
    render() {

        return (
            <div className="findings widget">
                <h4>{this.props.header}</h4>

                <ul className="list-group">
                      { this.state.entries.map((entry, index) => {

                          return <FindingsEntry
                                        key={entry.id}
                                        answer={entry.answer}
                                        question={entry.question}
                                        onDelete={this.removeFinding.bind(null, {index: index, parent: this})}
                                        patient={this.props.patient}
                                        options={this.state.options}
                                        typeTest={this.state.type}/>
                      })}
                </ul>
                <div className="footer">
                    <button type="button" onClick={this.addFinding.bind(this)}
                            className="btn btn-default btn-xs" aria-label="Left Align">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        )

    }
}