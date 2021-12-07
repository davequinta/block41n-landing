import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({image, name}) => {
  return (
    <div style={{backgroundColor: "white"}}>
      <img src={image} alt={`project-${name}`} />
      <section style={{padding: '10px 0 1px 8px'}}>
        <h4 style={{color: "#2c2e53"}}>{name}</h4>
      </section>
    </div>
  );
};

ProjectCard.propTypes = {};

export default ProjectCard;
