/**
 * Created by cbrenneisen on 5/5/17.
 */

import React, { Component } from 'react';
import PatientPicker from "./components/PatientPicker";
import './HomeScene.css';

export default class HomeScene extends Component {
    render() {

        const patients = [
            {
                'name': 'Beverly Hazzard',
                'mrn': '2009527'
            },
            {
                'name': 'Mary Hernandez',
                'mrn': '2009528'
            },
            {
                'name': 'Susan Shade',
                'mrn': '2009529'
            },
            {
                'name': 'Mitchell Matthews',
                'mrn': '2009530'
            },
            {
                'name': 'Angela Williams',
                'mrn': '2009531'
            },
            {
                'name': 'James Gorham',
                'mrn': '2009532'
            },
        ];

        return (
            <div id="home-screen">
                <div className="container">
                    <div className="row">
                        <div id="home-title" className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                            <h1>HydrO</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                            <PatientPicker patients={patients}/>
                        </div>
                    </div>
                </div>
                <div id="home-footer">
                    <h4>A Clinical Decision Support System to assist Fluid Resuscitation</h4>

                    <p>&copy; 2017 Carlos Brenneisen</p>
                </div>
            </div>
        );
    }
}
