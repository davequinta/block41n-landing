import React from "react";
import PropTypes from "prop-types";
import avatar from "../../assets/images/user/avatar.png";
export const UserBadge = ({user}) => {
  return (
    <div className="centered-content ">
      <img src={avatar} alt="avatar" width={120} style={{marginBottom: 20}} />
      <h4>{user.name}</h4>
      <h6>{user.email}</h6>
    </div>
  );
};

UserBadge.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
