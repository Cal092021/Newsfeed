import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import {useEffect, useState} from 'react';
import {Newsfeed} from "./components/Newsfeed";
import {SignUp} from "./components/login";

function App(props) {

  const [page, setPage] = useState("signUp");
  const [user, setUser] = useState(false);

  let returnedPage = undefined;


  return (

    <div className="App">

    <SignUp/>

    if (!user.hasOwnProperty("username")) {
      returnedPage === <Newsfeed setPage={setPage} />
}
    else if (page === "Newsfeed") {
      returnedPage = 
        <Newsfeed setPage={setPage}  />
      
    
  
    
}
</div>
  )}
  
  
ReactDom.render(
  <App photos={photos}/>,
  document.getElementById('root')
);

export default App;
