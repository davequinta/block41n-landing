import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Container} from "reactstrap";
import ProjectCard from "../components/projectCard/projectCard";
import {Link} from "react-router-dom";

const projectsList = [
  {
    name: "Bitcoin City",
    image:
      "https://marketplus.ch/wp-content/uploads/2018/05/Bitcoin-1920x1057.jpg",
  },
];

const ProjectsPage = () => {
  return (
    <Fragment>
      <Container>
        <div className="main-container profile-container">
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <h2>Projects</h2>
            <Link to="/register-project" className="btn1">
              add project
            </Link>
          </div>
          {projectsList.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                name={project.name}
                image={project.image}
              />
            );
          })}
        </div>
      </Container>
    </Fragment>
  );
};

ProjectsPage.propTypes = {};

export default ProjectsPage;
