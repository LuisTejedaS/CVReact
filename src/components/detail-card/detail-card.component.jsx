import React from "react";
import "./detail-card.styles.css";

export const DetailCard = ({ person }) => (
  <div className="detail-card-container">
    <div className="detail-card-details">
      <h2 key={person.id}>About me</h2>
      <p>{person.extract1}</p>
      <p>{person.extract2}</p>
      <div className="socials">
        <a href={person.githublink}>
          <i className="icon-github" aria-hidden="true"></i>
        </a>
        <a href={person.linkedinlink}>
          <i className="icon-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
);
