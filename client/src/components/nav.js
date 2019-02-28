import React from 'react';

export default props => {
  const links = [
    {label: 'Everyone', filter: ''},
    {label: 'Male', filter: {gender: 'male'}},
    {label: 'Female', filter: {gender: 'female'}},
    {label: 'Over 30', filter: {age: {gte: 30}}},
    {label: 'Under 30', filter: {age: {lt: 30}}},
  ]
  return links.map(link =>
    <a key={link.label}
       href="/"
       onClick={e => {
         e.preventDefault();
         props.setFilters(link.filter);
       }}
    >{link.label}</a>);
}
