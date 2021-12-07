import React from "react";
import PropTypes from "prop-types";

export const ListItem = ({title, description, icon}) => {
  return (
    <div
      style={{
        padding: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        cursor: "pointer",
      }}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <span>{title}</span>
        <span style={{color: "grey", fontSize: "12px"}}>{description}</span>
      </div>
      <img src={icon} alt="icon" style={{height: "20px"}} />
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
