import React, {Fragment, useState} from "react";
import {Container} from "reactstrap";
import {Separator} from "../components/separator/separator";

const RegisterProjectPage = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  const [start, setStart] = useState("");
  const [term, setTerm] = useState("");
  const [file, setFile] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "amount") {
      setAmount(e.target.value);
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
    if (e.target.name === "projectName") {
      setProjectName(e.target.value);
    }
    if (e.target.name === "start") {
      setStart(e.target.value);
    }
    if (e.target.name === "term") {
      setTerm(e.target.value);
    }
    if (e.target.name === "file") {
      setFile(e.target.value);
    }
  };

  return (
    <Fragment>
      <Container>
        <div className="main-container ">
          <h4>New Project</h4>
          <Separator />
          <section>
            <form>
              <div className="form-group">
                <label htmlFor="name" className="register-label">
                  Project Name
                </label>
                <br />
                <input
                  type="text"
                  id="projectName"
                  required
                  className="register-input"
                  value={projectName}
                  name="projectName"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="register-label">
                  Description
                </label>
                <br />
                <textarea
                  type="text"
                  id="description"
                  className="register-input"
                  value={description}
                  required
                  rows={4}
                  name="description"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label for="start" className="register-label">
                  Start date:
                </label>
                <br />
                <input
                  type="date"
                  id="start"
                  placeholder="Start date"
                  name="start"
                  required
                  onChange={changeHandler}
                  value={start}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="register-label">
                  Amount:
                </label>
                <br />
                <input
                  type="text"
                  id="amount"
                  className="register-input"
                  value={amount}
                  required
                  name="amount"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="register-label">
                  Term
                </label>
                <br />
                <input
                  type="text"
                  id="term"
                  required
                  className="register-input"
                  value={term}
                  name="term"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="register-label">
                  Attachments
                </label>
                <br />
                <input
                  type="file"
                  name="file"
                  className="register-input"
                  onChange={changeHandler}
                />
              </div>
              <button type="submit" className="btn1" style={{marginTop: 20}}>
                Submit
              </button>
            </form>
          </section>
        </div>
      </Container>
    </Fragment>
  );
};

RegisterProjectPage.propTypes = {};

export default RegisterProjectPage;
