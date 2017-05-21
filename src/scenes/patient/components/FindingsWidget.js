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
            entries: this.props.entries,
            options: this.props.options,
            type: type,
            endpoint: endpoint,
            entries: []
        }
    }
    componentWillMount() {
        //get data here
        //TODO: switch this to a network call

        let entries = [];
        if (this.props.entries !== undefined) {
            this.props.entries.forEach(function (element) {
                entries.push({id: ++id, question: element.question, answer: element.answer})
            });
        }

        this.setState ({
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