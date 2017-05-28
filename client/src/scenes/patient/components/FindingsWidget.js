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
        this.updateFindings(this.props.options, this.props.entries);
    }
    componentWillReceiveProps(nextProps){
        this.updateFindings(nextProps.options, nextProps.entries);
    }
    updateFindings(propsOptions, propsEntries){

        let selfEntries = [];
        if (propsEntries !== undefined) {
            propsEntries.forEach(function (element) {
                selfEntries.push({id: ++id, question: element.question, answer: element.answer})
            });
        }

        let selfOptions = [];
        let optID = 0;
        if (propsOptions !== undefined) {
            propsOptions.forEach(function (option) {
                selfOptions.push({id: ++optID, title: option.title, options: option.options,
                                  label: option.label, value: option.value, type: option.type})
            });
        }

        this.setState ({
            entries: selfEntries,
            options: selfOptions
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