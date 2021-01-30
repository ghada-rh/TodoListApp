import React, {useState, useEffect} from 'react';
import "./login.css";

function Login ({login, error}) {
    const [inputText, setInputText] = useState({email:"", password:""});
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        login(inputText);
        setInputText({ email: "", password: "" });
        
    }
        
    useEffect(() => {
        localStorage.setItem('inputText', JSON.stringify(inputText))
      }, [inputText])

    return (
        <form onSubmit={handleSubmit} className="login">
            
            <div className="login__container">
                <h2 className="login__text">Login</h2>
                {error && <h3 className="login__error">{error}</h3>}
                <div className="login__input">
                   <input type="email" placeholder="Enter email" required onChange={(e)=> setInputText({...inputText, email: e.target.value})}
                   value={inputText.email}
                   />
                    <input type="password" placeholder="Enter password" required onChange={(e)=> setInputText({...inputText, password: e.target.value})}
                    value={inputText.password}
                    />
                </div>
                <button className="btn">Login</button>
            </div>
        </form>
        );
}

export default Login;
