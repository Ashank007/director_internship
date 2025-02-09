import React from "react";
import "./UserCard.css";

const UserCard = ({ name, email, imageUrl }) => {
  return (
    <div className="user-card">
      <img src={imageUrl} alt={name} className="user-image" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
    </div>
  );
};

export default UserCard;
