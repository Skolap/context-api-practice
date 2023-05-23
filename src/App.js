import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import React, {useState} from 'react';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)

  const loginHandler = () =>{
    setIsLoggedin(!isLoggedin)
    console.log(isLoggedin)
  }
  return (
    <div className="App">
      <Login isLoggedin={isLoggedin} onButtonClick={loginHandler}/>
    </div>
  );
}

export default App;
