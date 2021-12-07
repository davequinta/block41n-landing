import React, {Fragment, useState} from "react";
import {Container} from "reactstrap";
import {Separator} from "../components/separator/separator";

const RegisterProjectPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
    if (e.target.name === "projectName") {
      setProjectName(e.target.value);
    }
  };

  return (
    <Fragment>
      <Container>
        <div className="main-container profile-container">
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
                  rows={4}
                  name="description"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="register-label">
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  className="register-input"
                  value={name}
                  name="name"
                  onChange={changeHandler}
                />
              </div>
              <button type="submit" className="btn1" >Submit</button>
            </form>
          </section>
        </div>
      </Container>
    </Fragment>
  );
};

RegisterProjectPage.propTypes = {};

export default RegisterProjectPage;
