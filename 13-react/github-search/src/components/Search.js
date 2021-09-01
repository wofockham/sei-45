import React, { useState } from 'react';

const Search = (props) => {
  const [username, setUsername] = useState(''); // array destructuring, with '' default value.

  const _handleSubmit = (event) => {
    event.preventDefault();
    props.history.push(`/details/${ username }`); // Programmatic navigation.
  };

  return (
    <div>
      <h2>Search Github by username</h2>
      <form onSubmit={ _handleSubmit }>
        <label>
          Username:
          <input type="search" onInput={ (event) => setUsername(event.target.value) } required />
        </label>

        <button>Search for { username }</button>
      </form>
    </div>
  );
};

export default Search;
