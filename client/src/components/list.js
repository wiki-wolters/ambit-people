import React from 'react';

export default ({ people, loading }) => {
  return (
    loading ?
    <p>Please wait...</p> :

    <ul>
      {people.map(person => <li key={person._id}>{person.name} {person.age}</li>)}
    </ul>
  );
}
