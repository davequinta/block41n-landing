import React, {Fragment, useState} from "react";
import {Container} from "reactstrap";
import {Separator} from "../components/separator/separator";

const RegisterBorrowerPage = () => {
  const [age, setAge] = useState("");
  const [dui, setDui] = useState("");
  const [income, setIncome] = useState("");
  const [eStatus, setStatus] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "age") {
      setAge(e.target.value);
    }
    if (e.target.name === "dui") {
      setDui(e.target.value);
    }
    if (e.target.name === "income") {
      setIncome(e.target.value);
    }
    if (e.target.name === "status") {
      setStatus(e.target.value);
    }
  };

  return (
    <Fragment>
      <Container>
        <div className="main-container ">
          <h4>Borrower Request</h4>
          <Separator />
          <section>
            <form>
              <div className="form-group">
                <label htmlFor="name" className="register-label">
                  DUI
                </label>
                <br />
                <input
                  type="text"
                  id="dui"
                  required
                  className="register-input"
                  value={dui}
                  name="dui"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age" className="register-label">
                  Age
                </label>
                <br />
                <input
                  type="number"
                  id="age"
                  required
                  className="register-input"
                  value={age}
                  name="age"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="income" className="register-label">
                  Income
                </label>
                <br />
                <input
                  type="number"
                  id="income"
                  required
                  className="register-input"
                  value={income}
                  name="income"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="income" className="register-label">
                  Employment Status
                </label>
                <br />
                <input
                  type="number"
                  id="estatus"
                  required
                  className="register-input"
                  value={eStatus}
                  name="estatus"
                  onChange={changeHandler}
                />
              </div>
              <button type="submit" className="btn1" style={{marginTop: 20}}>
                Submit request
              </button>
            </form>
          </section>
        </div>
      </Container>
    </Fragment>
  );
};

RegisterBorrowerPage.propTypes = {};

export default RegisterBorrowerPage;
