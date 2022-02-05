import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function AlertDetails() {

    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        API.getAlerts()
            .then(res => setAlerts(res.data))
            .catch(err => console.log(err));
    }, []);

    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Ticker</th>
                    <th scope="col">Company</th>
                    <th scope="col">Contract Info</th>
                    <th scope="col">Notes</th>
                </tr>
            </thead>
            <tbody>
                {alerts.map(alert => {
                    return (
                        <tr>
                            <th scope="row">{alert.Ticker}</th>
                            <td>{alert.Company}</td>
                            <td>{alert.ExpirationMonth + " " + alert.ExpirationDay + " " + alert.ExpirationYear + " " + alert.Strike + alert.Position + " " + alert.ContractP}</td>
                            <td>{alert.Notes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AlertDetails;