import React from 'react';
import _ from 'underscore';

import { Link } from 'react-router-dom';

const Home = (props) => {
  const _gotoRandomUser = () => {
    const students = ['wofockham', 'hesstab', 'MoAbyari', 'roweeena', 'CDDiaz'];
    const randomStudent = _(students).sample();
    props.history.push(`/details/${ randomStudent }`);
  };

  return (
    <div>
      <h1>Github Search</h1>

      <Link to="/search">
        <button>Search for a user</button>
      </Link>

      <button onClick={ _gotoRandomUser }>Random user</button>
    </div>
  )
}

export default Home;
