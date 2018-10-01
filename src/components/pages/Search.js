import React from "react";
import API from "../../utils/API";

const loadBreeds = () => {
  API.search("breeds/list").then()
}

const About = () => (
  <div>
    <h1>Search by Breed!</h1>
    <p>
      Search here...
    </p>
  </div>
);

export default About;
