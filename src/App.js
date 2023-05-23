import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import React, {useState} from 'react';
import AuthContext from './context/auth-context';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)

  const loginHandler = () =>{
    setIsLoggedin(!isLoggedin)
    console.log(isLoggedin)
  }
  return (
    <div className="App">
      <AuthContext.Provider value={{
    isLoggedIn: isLoggedin,
    onButtonClick:loginHandler
}}>
        <Login />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
