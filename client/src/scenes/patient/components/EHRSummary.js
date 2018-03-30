/**
 * Created by cbrenneisen on 5/7/17.
 */

import React, { Component } from 'react';
import './style/EHRSummary.css';

export default class PatientScene extends Component {
    render() {
        return (
            <div id="ehr-summary" className="row widget">
                <div className="col-xs-12">
                    <div className="row">
                        <h4>EHR Summary</h4>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <div className="header">D.O.B.</div>
                            <div className="footer">{this.props.patient.birthdate}</div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="header">Gender</div>
                            <div className="footer">{this.props.patient.gender}</div>
                        </div>
                        <div className="visible-xs visible-sm col-xs-12">
                            &nbsp;
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="header">Weight</div>
                            <div className="footer">{this.props.patient.weight} lbs</div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="header">Height</div>
                            <div className="footer">{this.props.patient.height} cm</div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}