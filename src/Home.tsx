import { useState } from "react";
import App from './App.tsx'
import LoginForm from "./LoginForm.tsx";
import md5 from 'md5';


const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (password:string) => {
    if (md5(password) === "cd2acea595e93463bc8ea3b6d1583fc9") {
      setIsLoggedIn(true);
    } else {
      alert("ユーザー名またはパスワードが間違っています");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <App />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );


// return(
//   <App />
// )
};

export default Home;