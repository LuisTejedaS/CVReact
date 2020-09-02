import React from "react";
import "./card.styles.css";

const Card = props => (
  <div className="card-container">
    <img alt="person" src={props.person.imgSource}></img>
    <div className="card-details">
      <h2 key={props.person.id}>{props.person.name}</h2>
      <p>{props.person.location}</p>
      <p>{props.person.jobPosition}</p>
      <p>{props.person.email}</p>
      <div className="socials">
        <a href={props.person.githublink}>
          <i className="icon-github" aria-hidden="true"></i>
        </a>
        <a href={props.person.linkedinlink}>
          <i className="icon-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Card;
