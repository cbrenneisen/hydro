/**
 * Created by cbrenneisen on 5/13/17.
 */


export default class PatientService {

    static patient_info(mrn) {

        if (mrn === "2009527") {

            let ehr = {dob: "01/15/1990", gender: "F", weight: "192", height:"165", age: "27"};
            return {name: "Beverly Hazzard", ehr: ehr};
        }
        if (mrn === "2009528") {

            let ehr = {dob: "05/10/1939", gender: "F", weight: "165", height:"160", age: "78"};
            return {name: "Mary Hernandez", ehr: ehr};
        }
        if (mrn === "2009529") {

            let ehr = {dob: "06/11/1973", gender: "F", weight: "110", height:"158", age: "43"};
            return {name: "Susan Shade", ehr: ehr};
        }
        if (mrn === "2009530") {

            let ehr = {dob: "10/22/1955", gender: "M", weight: "187", height:"172", age: "61"};
            return {name: "Mitchell Matthews", ehr: ehr};
        }
        if (mrn === "2009531") {

            let ehr = {dob: "08/05/1949", gender: "F", weight: "99", height:"160", age: "67"};
            return {name: "Angela Williams", ehr: ehr};
        }
        if (mrn === "2009532") {

            let ehr = {dob: "10/05/1955", gender: "M", weight: "160", height:"165", age: "61"};
            return {name: "James Gorham", ehr: ehr};
        }

        return {name: "", ehr: {}};
    }

    static all_patients(){

        return [
            {
                name: 'Beverly Hazzard',
                mrn: '2009527'
            },
            {
                name: 'Mary Hernandez',
                mrn: '2009528'
            },
            {
                name: 'Susan Shade',
                mrn: '2009529'
            },
            {
                name: 'Mitchell Matthews',
                mrn: '2009530'
            },
            {
                name: 'Angela Williams',
                mrn: '2009531'
            },
            {
                name: 'James Gorham',
                mrn: '2009532'
            }
        ];
    }
}
