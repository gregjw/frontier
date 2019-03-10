import React from 'react';
import '../styles/in-app.scss';

// Since this component is simple and static, there's no parent container for it.
const LogInPage = () => {
  return (
    <form action="https://api.tiny.markets/login" method="post">
      <h2 style={{ marginBottom: 25 }}>Sign in</h2>
      <input className="form" style={{ width: 250 }} placeholder="Email Address" type="email" size="30" name="email" aria-required="true"></input>
      <input className="form" style={{ width: 250 }} placeholder="Password" type="password" size="30" name="password" aria-required="true"></input>
      <button type="submit" style={{ float: 'right', marginRight: 35}}>Sign in to Tiny</button>
    </form>
  );
};

export default LogInPage;
