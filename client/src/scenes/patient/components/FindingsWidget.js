/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import './style/FindingsWidget.css';
import FindingsEntry from "./FindingsEntry"

let id = 0;
export default class FindingsWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            entries: []
        }
    }
    componentWillMount() {
        //get data here

        let entries = [];
        if (this.props.entries !== undefined) {
            this.props.entries.forEach(function (element) {
                entries.push({id: ++id, question: element.question, answer: element.answer})
            });
        }

        let options = [];
        let optID = 0;
        if (this.props.options !== undefined) {
            this.props.options.forEach(function (option) {
                options.push({id: ++optID, label: option.label, value: option.value, type: option.type})
            });
        }

        this.setState ({
            entries: entries,
            options: options
        })
    }
    addFinding(){

        let entries = this.state.entries;
        entries.push({id: ++id, answer: "", question: ""});

        this.setState ({
            entries: entries
        })
    }
    removeFinding(input){

        let entries = input.parent.state.entries;
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
                                        options={this.state.options} />
                      })}
                </ul>
                <div className="footer">
                    <button type="button" onClick={this.addFinding.bind(this)}
                            className="btn btn-default btn-xs" aria-label="Left Align">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        )
    }
}