/**
 * Created by cbrenneisen on 5/5/17.
 */

import React, { Component } from 'react';
import PatientPicker from "./components/PatientPicker";
import './HomeScene.css';

export default class HomeScene extends Component {
    render() {
        return (
            <div id="home-screen">
                <div className="container">
                    <div className="row">
                        <div id="home-title" className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                            <h1> HydrO</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                            <PatientPicker />
                        </div>
                    </div>
                </div>
                <div id="home-footer">
                    <h4>A Clinical Decision Support System to assist Fluid Resuscitation</h4>
                    <a href="https://github.com/cbrenneisen/hydro">
                        <h5>Click here for Source Code and Instructions</h5>
                    </a>
                    <p>&copy; 2017 Carlos Brenneisen</p>
                </div>
            </div>
        );
    }
}
