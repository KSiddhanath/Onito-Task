import React from 'react';
import { useState } from 'react';
import './style.css';

export default function Receipt() {
  const [inputField, setInputField] = useState({
    date: '',
    amount: '',
    payment_mode: '',
    remark: '',
  });

  const inputsHandler = (e) => {
    setInputField((inputField) => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
  };

  const submitButton = () => {
    if (
      inputField.date &&
      inputField.amount &&
      inputField.payment_mode &&
      inputField.remark
    ) {
      SaveDataToLocalStorage(inputField);
      console.log('data inserted successfuly');
      setInputField({
        date: '',
        amount: '',
        payment_mode: '',
        remark: '',
      });
    } else {
      alert('Please fill data');
    }
  };

  const SaveDataToLocalStorage = (data) => {
    // data store in local storage
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(data);
    localStorage.setItem('session', JSON.stringify(a));
  };

  return (
    <div className="main">
      <form>
        <h2>
          <u>Receipt Details</u>
        </h2>
        <div className="row mb-3 form-group required">
          <label
            htmlFor="inputEmail3"
            className="control-label col-sm-2 col-form-label"
          >
            Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              value={inputField.date}
              name="date"
              onChange={inputsHandler}
              className="form-control"
              placeholder="Enter Date"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-3 form-group required">
          <label
            htmlFor="inputEmail3"
            className="control-label col-sm-2 col-form-label"
          >
            Amount
          </label>
          <div className="col-sm-10">
            <input
              type="money"
              value={inputField.amount}
              name="amount"
              onChange={inputsHandler}
              className="form-control"
              placeholder="Enter Amount (in INR) "
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-3 form-group required">
          <label
            htmlFor="inputEmail3"
            className="control-label col-sm-2 col-form-label"
          >
            Payment Mode
          </label>
          <div className="col-sm-10">
            <select
              className="form-select"
              onChange={inputsHandler}
              name="payment_mode"
              id="autoSizingSelect"
            >
              <option select="">Choose...</option>
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Remark
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={inputField.remark}
              name="remark"
              onChange={inputsHandler}
              className="form-control"
              placeholder="Enter remark "
              id="inputEmail3"
            />
          </div>
        </div>

        <div align="right">
          <button
            type="submit"
            className="btn btn-outline-danger mb-3 mx-5 btn-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={submitButton}
            className="btn btn-success mb-3 mx-3 btn-lg"
          >
            Submit
          </button>
        </div>
      </form> <hr/>

      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Remark</th>
            </tr>
          </thead>
          <tbody>
            {JSON.parse(localStorage.getItem('session'))
              ? JSON.parse(localStorage.getItem('session')).map((data, i) => {
                  return (
                    <tr key={i}>
                      <td scope="row"></td>
                      <td> {data.date} </td>
                      <td> {data.amount} </td>
                      <td> {data.payment_mode} </td>
                      <td> {data.remark} </td>
                    </tr>
                  );
                })
              : ''}
          </tbody>
        </table>
        {/* <button onClick={() => localStorage.removeItem('session')}>
          Clear Data
        </button> */}
      </div>
    </div>
  );
}

