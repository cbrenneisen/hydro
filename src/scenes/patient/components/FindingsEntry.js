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
        for (let i = 0; i< this.props.options.length; i++) {

            if (this.props.options[i].value === value) {
                type = this.props.options[i].type;
                break
            }
        }

        if (type === "Bool" && submit){
            this.props.patient.update(value, "YES");
        }

        //update both the answer and the question
        this.setState ({
            answerType: type,
            question: value
        })
    }
    removeEntry(){
        this.props.patient.removeAnswer(this.state.question);
        this.props.onDelete();
    }
    render() {

        let answerView = null;
        if (this.state.answerType === "Bool") {

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
                <div className="left">
                    <select className="form-control"
                            onChange={this.updateQuestion.bind(this)} value={this.state.question}>
                        {this.props.options.map((option) => {
                            return <option key={option.id} value={option.value}>{option.label}</option>
                        })}
                    </select>
                </div>
                <div className="right">

                    {answerView}
                </div>
                <div className="trash">
                    <span className="glyphicon glyphicon glyphicon-trash"
                          aria-hidden="true" onClick={this.removeEntry.bind(this)}/>
                </div>
            </li>
        )
    }
}