import{ useState } from "react";

function LoginForm({ onLogin }:any) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>パスワード:</label>
          <input
            style={{border: "1px solid #000"}}
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default LoginForm;