import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/feed';

ReactDOM.render(
  <Feed user={4} />, //4 is the ID of "John Vilk"
  document.getElementById('fb-feed')
);
