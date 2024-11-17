import React from 'react';

function LoginPage() {
  return (
    <div>
        <form>
  <label>
    Email*
    <input type="email" required />
  </label>
  <label>
    Password*
    <input type="password" required />
  </label>
  <button type="submit">Log in</button>
  <button type="submit">Register</button>

</form>
    </div>

  );
}

export default LoginPage;
