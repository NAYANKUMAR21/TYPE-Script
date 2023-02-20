import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LoginAction } from './redux/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const store = useSelector((store) => store.auth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(LoginAction(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          onChange={handleChange}
          name="email"
        />
        <input
          placeholder="Pass"
          type="text"
          onChange={handleChange}
          name="password"
        />
        <input type="submit" />
      </form>
      <h1>{store.data.token}</h1>
    </div>
  );
}

export default App;
