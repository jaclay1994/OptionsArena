import React, { useState } from "react";
import API from "../../utils/API";
// import { InputHTMLAttributes } from "react";

function AlertSubmit() {
    // const [alerts, setAlerts] = useState([]);
    const [formObject, setFormObject] = useState([]);

    // useEffect(() => {
    //     loadAlerts()
    // }, []);

    function loadAlerts() {
        API.getAlerts()
            .then(res =>
                setFormObject(res.data)
            )
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault()
        if (formObject.Ticker) {
            API.saveAlert({
                Ticker: formObject.Ticker,
                Company: formObject.Company,
                ExpirationDay: formObject.ExpirationDay,
                ExpirationMonth: formObject.ExpirationMonth,
                ExpirationYear: formObject.ExpirationYear,
                Position: formObject.Position,
                ContractP: formObject.ContractP,
                Notes: formObject.Notes
            })
                .then(res => loadAlerts())
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='container-fluid px-5'>
            <div className='row'>

                <div className='col-2'>
                    <h1>Options Arena</h1>
                </div>
                <div className='col-8 text-center'>
                    <h1>Alert Submission</h1>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-lg-auto">
                    <div className="input-group lg-6">
                        <span className="input-group-text" id="basic-addon1">Enter Ticker</span>
                        <input type="text" name="Ticker" onChange={handleInputChange} className="form-control" placeholder="Type..." aria-label="Ticker"
                            aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group lg-3">
                        <input type="text" name="Company" onChange={handleInputChange} className="form-control" placeholder="Company Name" aria-label="Company"
                            aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2">Company</span>
                    </div>
                    <br />
                    <div className="input-group mb-3">
                        <label className="input-group-text" for="inputGroupSelect01">Select Expiration Date</label>
                        <select name="ExpirationDay" onChange={handleInputChange} className="form-select" id="inputGroupSelect01">
                            <option selected>Day</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                        <select name="ExpirationMonth" onChange={handleInputChange} className="form-select" id="inputGroupSelect01">
                            <option selected>Month</option>
                            <option>JAN</option>
                            <option>FEB</option>
                            <option>MAR</option>
                            <option>APR</option>
                            <option>MAY</option>
                            <option>JUN</option>
                            <option>JUL</option>
                            <option>AUG</option>
                            <option>SEP</option>
                            <option>OCT</option>
                            <option>NOV</option>
                            <option>DEC</option>
                        </select>
                        <select name="ExpirationYear" onChange={handleInputChange} className="form-select" id="inputGroupSelect01">
                            <option selected>Year</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <label className="input-group-text" for="inputGroupSelect01">Call or Put</label>
                        <select name="Position" onChange={handleInputChange} className="form-select" id="inputGroupSelect01">
                            <option selected>Select...</option>
                            <option>C</option>
                            <option>P</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">Contract Price</span>
                        <input type="text" name="ContractP" onChange={handleInputChange} className="form-control" aria-label="Amount (to the nearest dollar)" />
                        <span className="input-group-text">Mark Price: 0.38</span>
                    </div>
                    <div className="input-group lg-6">
                        <span className="input-group-text" id="basic-addon1">Notes</span>
                        <input type="text" name="Notes" onChange={handleInputChange} className="form-control" placeholder="Type..." aria-label="Notes"
                            aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="col text-center">
                        <button type="button" disabled={!(formObject.Ticker)} onClick={handleFormSubmit} className="btn btn-primary align-self-center">Submit Alert</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AlertSubmit;