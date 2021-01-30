import React, {useState, useEffect} from "react";
import ListContextProvider from "./component/ListContext";
import TaskList from "./component/List";
import Form from "./component/Form";
import Login from "./component/Login";
import "./App.css";

const App = () => {
  const admin = {
    email: "test@test.com",
    password:"test"
  }
  const [user, setUser] = useState({email: "", password:""});
  const [error, setError] = useState("");
  
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const login = userInfo => { 
      if (userInfo.email === admin.email && userInfo.password === admin.password){
          setUser({
            email: userInfo.email,
            password: userInfo.password
          });
          //localStorage.setItem('user', JSON.stringify(user));
   
      } else {
        console.log('info incorrect') 
        setError('info incorrect');
      }
  }
  
  const logout = () => { 
    //localStorage.removeItem('user');
    setUser({ email: "", password: "" });
  }
 //console.log(localStorage.getItem(user.email));
  return (
    <ListContextProvider>
      <div className="app">
         
           {!user.email? (<Login login={login} error={error}/>):
           (<div className="app-body">
            <div className="main">
              <header>
                <h2>Welcome to Todo-App!</h2>
                <button className="btn" onClick={logout}>logout</button>
              </header>
              
              <TaskList/>
              <Form />
              </div>    
            </div> 
           )}
         
      </div>
     
    </ListContextProvider>
  );
};

export default App;
