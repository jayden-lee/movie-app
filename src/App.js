import React from "react";
import PropTypes from "prop-types";

function Movie({name}) {
  return <h1>{name}</h1>;
}

Movie.propTypes = {
  name: PropTypes.string.isRequired
}

const movies = [
  {
    id: 1,
    name: "The Lion King"
  },
  {
    id: 2,
    name: "Aladdin"
  },
  {
    id: 3,
    name: "엑시트"
  }
];

function App() {
  return (
    <div>
      <h1>Movie List</h1>
      {
        movies.map(data => <Movie key ={data.id} name={data.name}/>)
      }
    </div>
  );
}

export default App;
