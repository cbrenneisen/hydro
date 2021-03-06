/**
 * Created by cbrenneisen on 5/14/17.
 */

import FindingsService from './FindingsService'
import PatientService from './PatientService'
import Rx from 'rxjs/Rx'

export default class Patient {

    score = new Rx.BehaviorSubject(0);

	mrn = "";
	name = "";

    //ehr
    gender = null;
	weight = null;
	height = null;
	birthdate = null;
	age = null;

	chief_complaint = null;

	burn = new Rx.BehaviorSubject(false);
    traumatic_brain = new Rx.BehaviorSubject(false);
    shock = new Rx.BehaviorSubject(false);
    traumatic_resuscitation = new Rx.BehaviorSubject(false);
    keystones = new Rx.BehaviorSubject(false);
    diabetic = new Rx.BehaviorSubject(false);
	npo = new Rx.BehaviorSubject(false);

	//score modifiers
	sbp = -1;
	dbp = -1;
	heartRate = -1;
	capillary_refill = -1;
	respiratory_rate = -1;
	temperature = -1;
	oxygen_required = false;
	altered_location = false;
	urine_output = -1;
	bs = -1;

	problems = [];
    vitals = [];
    lab_results = [];

    configure(json){

        this.name = json.name;
        this.mrn = json.mrn;
        this.chief_complaint = json.chief_complaint;

        this.gender = json.ehr.gender;
        this.weight = json.ehr.weight;
        this.height = json.ehr.height;
        this.birthdate = json.ehr.dob;
        this.age = json.ehr.age;

        this.vitals = json.findings.vitals;
        this.lab_results = json.findings.lab_results;
        this.problems = json.findings.problems;

        for (let i = 0; i < this.vitals.length; i ++ ){
            this.resolve(this.vitals[i].question, this.vitals[i].answer);
        }
        for (let i = 0; i < this.lab_results.length; i ++ ){
            this.resolve(this.lab_results[i].question, this.lab_results[i].answer);
        }
        for (let i = 0; i < this.problems.length; i ++ ){
            this.resolve(this.problems[i].question, this.problems[i].answer);
        }
    }

    setup(){

        let info = PatientService.patient_info(this.mrn).ehr;

        this.birthdate = info.dob;
        this.gender = info.gender;
        this.weight = info.weight;
        this.height = info.height;
        this.age = info.age;

        this.problems = FindingsService.problem_list(this.mrn);
        this.vitals = FindingsService.vital_signs(this.mrn);
        this.lab_results = FindingsService.lab_results(this.mrn);

        for (let i = 0; i < this.problems.length; i ++ ){
            this.resolve(this.problems[i].question, this.problems[i].answer);
        }
        for (let i = 0; i < this.vitals.length; i ++ ){
            this.resolve(this.vitals[i].question, this.vitals[i].answer);
        }
        for (let i = 0; i < this.lab_results.length; i ++ ){
            this.resolve(this.lab_results[i].question, this.lab_results[i].answer);
        }
        this.setScore();
    }
    update(question, answer){
        this.resolve(question, answer);
        this.setScore();
    }

    removeAnswer(question){
        this.resolve(question, false);
        this.setScore();
    }

    resolve(question, answer){
        switch (question){

            default:
                break;

            case "SBP":
                this.sbp = answer;
                break;

            case "PULSE":
                this.heartRate = answer;
                break;

            case "CAPILLARY_REFILL":
                this.capillary_refill = answer;
                break;

            case "RESP_RATE":
                this.respiratory_rate = answer;
                break;

            case "TEMPERATURE":
                this.temperature = answer;
                break;

            case "ALTERED_LOC":
                 if (answer === "YES") {
                    this.altered_location = true;
                 }else {
                     this.altered_location = false;
                 }
                break;

            case "URINE_OUTPUT":
                this.urine_output = answer;
                break;

            case "BS":
                this.bs = answer;
                break;

            case "O2_REQUIREMENT":
                if (answer === "YES") {
                    this.oxygen_required = true;
                }else{
                    this.oxygen_required = false;
                }
                break;

            case "NPO":
                if (answer === "YES") {
                    this.npo.next(true)
                }else{
                    this.npo.next(false)
                }
                break;

            case "BURN":
                if (answer === "YES") {
                    this.burn.next(true)
                }else{
                    this.burn.next(false)
                }
                break;

            case "TRAUMATIC_BRAIN":
                if (answer === "YES") {
                    this.traumatic_brain.next(true)
                }else{
                    this.traumatic_brain.next(false)
                }
                break;

            case "SHOCK":
                if (answer === "YES") {
                    this.shock.next(true)
                }else{
                    this.shock.next(false)
                }
                break;

            case "TRAUMATIC_RESUSCITATION":
                if (answer === "YES") {
                    this.traumatic_resuscitation.next(true)
                }else{
                    this.traumatic_resuscitation.next(false)
                }
                break;

            case "KEYSTONES":
                if (answer === "YES") {
                    this.keystones.next(true)
                }else{
                    this.keystones.next(false)
                }
                break;

            case "DIABETIC":
                if (answer === "YES") {
                    this.diabetic.next(true)
                }else{
                    this.diabetic.next(false)
                }
                break;
        }
    }
    setScore(){

        var score = 0;
        if (this.sbp !== -1)
        {
            if (this.sbp < 90)
            {
                score += 3;
            }
            else if (this.sbp <= 100 && this.sbp >= 90 )
            {
                score += 2;
            }
            else if (this.sbp < 120 && this.sbp > 100)
            {
                score += 1;
            }
        }
        if(this.heartRate !== -1)
        {
            if (this.heartRate < 120 && this.heartRate >= 100 )
            {
                score += 1;
            }
            else if (this.heartRate >= 120)
            {
                score += 2;
            }
        }
        if (this.capillary_refill >= 2)
        {
            score += 1;
        }
        if (this.respiratory_rate >= 25)
        {
            score += 1;
        }
        if (this.temperature >= 37.5)
        {
            score += 1;
        }
        if (this.oxygen_required)
        {
            score += 1;
        }
        if (this.altered_location)
        {
            score += 1;
        }
        if (this.urine_output < 30 && this.urine_output !== -1)
        {
            score += 1;
        }
        if(this.age > 65)
        {
            score += 1;
        }

        this.score.next(score);
    }
}