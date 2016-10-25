import React from 'react'; // imports library into application
import ReactDOM from 'react-dom';

class UghWorld extends React.Component {
  render() {
    return (
      <p>ugh, world</p>
    );
  }
}

ReactDOM.render( // replace the contents of the feed 
  <UghWorld />,
  document.getElementById('fb-feed')
);
