/**
 * Created by carlos.brenneisen on 5/18/17.
 */

import React, { Component } from 'react';
import './style/ChiefComplaint.css';

let id = 0;
export default class FluidAction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            question: this.props.patient.chief_complaint,
        };
    }
    componentWillMount(){
        fetch("/api/complaints")
            .then(resp => resp.json())
            .then(resp => {
                this.setOptions(resp);
            });
    }
    setOptions(input){
        let options = [{id: ++id, value: "NO", title: "None"}];
        input.forEach(function (element) {
            options.push({id: ++id, value: element.value, title: element.title})
        });

        this.setState({
            options: options
        });
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
                        return <option key={entry.id} value={entry.value}>{entry.title}</option>
                    })}
                </select>
            </div>
        )
    }
}