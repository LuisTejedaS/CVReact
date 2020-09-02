import Card from "../../components/Card/card.component";
import React from "react";

const HomePage = ({ person }) => <Card key={person.id} person={person} />;
export default HomePage;
