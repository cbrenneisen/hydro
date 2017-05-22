/**
 * Created by cbrenneisen on 5/13/17.
 */

export default class FindingsService {

    static vital_signs(mrn) {

        if (mrn === "2009527") {

            return [{question: "TEMP", answer: "37"},
                    {question: "SBP", answer: "110"},
                    {question: "DBP", answer: "74"},
                    {question: "RESP_RATE", answer: "35"},
                    {question: "PULSE", answer: "98"},
                    {question: "CAPILLARY_REFILL", answer: "Normal"},
                    {question: "URINE_OUTPUT", answer: "75"},
                    {question: "ALTERED_LOC", answer: "NO"}];
        }
        if (mrn === "2009528"){
            return [{question: "TEMP", answer: "38"},
                    {question: "SBP", answer: "86"},
                    {question: "DBP", answer: "48"},
                    {question: "RESP_RATE", answer: "20"},
                    {question: "PULSE", answer: "115"},
                    {question: "PULSE_OX", answer: "91"},
                    {question: "NPO", answer: "NO"},
                    {question: "ALTERED_LOC", answer: "YES"}];
        }
        if (mrn === "2009529") {

            return [{question: "TEMP", answer: "37"},
                    {question: "SBP", answer: "105"},
                    {question: "DBP", answer: "70"},
                    {question: "PULSE", answer: "102"},
                    {question: "RESP_RATE", answer: "25"},
                    {question: "NPO", answer: "NO"},
                    {question: "ALTERED_LOC", answer: "NO"}];
        }
        if (mrn === "2009530") {

            return [{question: "TEMP", answer: "38"},
                    {question: "SBP", answer: "125"},
                    {question: "DBP", answer: "87"},
                    {question: "PULSE", answer: "95"},
                    {question: "RESP_RATE", answer: "30"},
                    {question: "NPO", answer: "YES"},
                    {question: "ALTERED_LOC", answer: "NO"}];
        }
        if (mrn === "2009531") {
            return [{question: "TEMP", answer: "37"},
                    {question: "SBP", answer: "110"},
                    {question: "DBP", answer: "65"},
                    {question: "PULSE", answer: "120"},
                    {question: "RESP_RATE", answer: "24"},
                    {question: "NPO", answer: "YES"},
                    {question: "O2_REQUIREMENT", answer: "YES"},
                    {question: "ALTERED_LOC", answer: "YES"}];
        }
        if (mrn === "2009532") {
            return [{question: "TEMP", answer: "37"},
                    {question: "SBP", answer: "110"},
                    {question: "DBP", answer: "65"},
                    {question: "PULSE", answer: "120"},
                    {question: "RESP_RATE", answer: "24"},
                    {question: "NPO", answer: "YES"},
                    {question: "O2_REQUIREMENT", answer: "YES"},
                    {question: "ALTERED_LOC", answer: "YES"}];
        }

        return []
    }

    static problem_list(mrn){

        if (mrn === "2009527") {

            return [{question: "UTI", answer: "YES"},
                   {question: "BIPOLAR", answer: "YES"},
                    {question: "HYPERTENSION", answer: "NO"}];
        }
        if (mrn === "2009528") {

            return [{question: "DIABETES_II", answer: "YES"},
                    {question: "HYPERTENSION", answer: "YES"}];
        }
        if (mrn === "2009529") {
            return []
        }
        if (mrn === "2009530") {
            return [{question: "DIABETES_II", answer: "YES"},
                    {question: "HYPERTENSION", answer: "YES"}];
        }
        if (mrn === "2009531") {
            return [{question: "HEART_FAILURE", answer: "YES"}]
        }
        if (mrn === "2009532") {
            return [{question: "HEART_FAILURE", answer: "NO"}]
        }

        return []
    }

    static lab_results(mrn){

        if (mrn === "2009527") {

            return [{question: "WBC", answer: "12.5"}];
        }
        if (mrn === "2009528") {

            return [];
        }
        if (mrn === "2009529") {

            return [{question: "K", answer: "3.3"},
                    {question: "Na", answer: "125"}];
        }
        if (mrn === "2009530") {
            return [{question: "GLUCOSE", answer: "245"}];
        }
        if (mrn === "2009531") {
            return [];
        }
        if (mrn === "2009532") {
            return [{question: "CREATININE", answer: "2.3"}];
        }

        return []
    }

}