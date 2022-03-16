import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import {useEffect, UseState} from 'react';

function App(props) {

  const photos = props.photos;
  const listItems = photos.map((photo) => <li>{photo}</li>
  );


  return (
    <div className="App">
      <h1>Newsfeed</h1>
      {photos.map((image) => <img key={image.src} src={image.src} />)}
      <div className="id"></div>
      <p>
      </p>
    </div>
  );
}

const photos = 
[{src:"https://picsum.photos/id/237/200/300"},
{src:"https://picsum.photos/id/408/200/300"},
{src:"https://picsum.photos/id/935/200/300"},
{src:"https://picsum.photos/id/607/200/300"},
{src:"https://picsum.photos/id/208/200/300"},
{src:"https://picsum.photos/id/237/200/300"},
{src:"https://picsum.photos/id/408/200/300"},
{src:"https://picsum.photos/id/935/200/300"},
{src:"https://picsum.photos/id/607/200/300"},
{src:"https://picsum.photos/id/208/200/300"},
{src:"https://picsum.photos/id/237/200/300"},
{src:"https://picsum.photos/id/408/200/300"},
{src:"https://picsum.photos/id/935/200/300"},
{src:"https://picsum.photos/id/607/200/300"},
{src:"https://picsum.photos/id/208/200/300"},
{src:"https://picsum.photos/id/237/200/300"},
{src:"https://picsum.photos/id/408/200/300"},
{src:"https://picsum.photos/id/935/200/300"},
{src:"https://picsum.photos/id/607/200/300"},
{src:"https://picsum.photos/id/208/200/300"},
{src:"https://picsum.photos/id/237/200/300"},
{src:"https://picsum.photos/id/408/200/300"},
{src:"https://picsum.photos/id/935/200/300"},
{src:"https://picsum.photos/id/607/200/300"},
{src:"https://picsum.photos/id/208/200/300"},
{src:"https://picsum.photos/id/237/200/300"},
{src:"https://picsum.photos/id/408/200/300"},
{src:"https://picsum.photos/id/935/200/300"},
{src:"https://picsum.photos/id/607/200/300"},
{src:"https://picsum.photos/id/208/200/300"},
{src:"https://picsum.photos/id/505/200/300"}
];


ReactDom.render(
  <App photos={photos}/>,
  document.getElementById('root')
);

export default App;
