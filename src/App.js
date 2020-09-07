import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {requests.map(request => (
        <Row key={request.fetchUrl} title={request.title} fetchUrl={request.fetchUrl} isLargeRow={request.isLargeRow}/>
      ))};
    </div>
  );
}

export default App;
