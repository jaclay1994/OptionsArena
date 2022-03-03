import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAlerts: function () {
        return axios.get("/alert")
    },

    saveAlert: function (alertData) {
        return axios.post("/alert", alertData)
    }

    // Give the user the option to chose how they will receive alerts. Text or email
};