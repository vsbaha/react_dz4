import React, { useState } from "react";
import "./App.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("")
  const [submittedData, setSubmittedData] = useState(null);

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regExp = /^\w+@gmail\.com$/
    if (regExp.test(mail)){
      const htmlContent = (
        <ul>
          <p>e-mail: {mail}</p>
          <p>имя: {username}</p>
          <p>пароль: {password}</p>
        </ul>
      );
      setSubmittedData(htmlContent);
    } else {
      alert ('bad')
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit} className="registration-form">
        <h3>Регистрация</h3>
        <input
          type="text"
          value={mail}
          onChange={handleMailChange}
          placeholder="e-mail"
          className="form-input"
          required
        />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          className="form-input"
          required
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit" className="form-button">
          Регистрация
        </button>
        {submittedData}
      </form>
    </>
  );
};

export default RegistrationForm;
