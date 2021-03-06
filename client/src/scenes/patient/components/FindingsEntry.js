/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import './style/FindingsEntry.css';

export default class FindingsEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: this.props.answer,
            question: this.props.question,
            answerType: null,
            label: "",
            options: []
        };
    }
    componentWillMount(){
        this.updateAnswerView(this.state.question, false);
    }
    updateAnswer(event){
        this.setState ({
            answer: event.target.value
        });
        this.props.patient.update(this.state.question, event.target.value);
    }
    updateQuestion(event){
        this.setState ({
            answer: ""
        });
        this.updateAnswerView(event.target.value, true);
    }
    updateAnswerView(value, submit){
        //find the corresponding type
        let type = null;
        let label = "";
        for (let i = 0; i< this.props.options.length; i++) {
            if (this.props.options[i].value === value) {
                type = this.props.options[i].type;
                label = this.props.options[i].label;
                break
            }
        }

        if (type === "BOOL" && submit){
            this.props.patient.update(value, "YES");
        }

        //update both the answer and the question
        this.setState ({
            answerType: type,
            question: value,
            label: label
        })
    }
    removeEntry(){
        this.props.patient.removeAnswer(this.state.question);
        this.props.onDelete();
    }
    render() {

        let answerView = null;
        if (this.state.answerType === "BOOL") {

            answerView =
                <select className="form-control" onChange={this.updateAnswer.bind(this)} value={this.state.answer}>
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                </select>
        }else{
            answerView = <input type="text" className="form-control"
                                value={this.state.answer} onChange={this.updateAnswer.bind(this)}/>
        }

        return (
            <li className="list-group-item">
                <div className="question">
                    <select className="form-control"
                            onChange={this.updateQuestion.bind(this)} value={this.state.question}>
                        {this.props.options.map((option) => {
                            return <option key={option.id} value={option.value}>{option.title}</option>
                        })}
                    </select>
                </div>
                <div className="answer">
                    {answerView}
                </div>
                <div className="label">
                    <h6>{this.state.label}</h6>
                </div>
                <div className="trash">
                    <span className="glyphicon glyphicon glyphicon-trash"
                          aria-hidden="true" onClick={this.removeEntry.bind(this)}/>
                </div>
            </li>
        )
    }
}