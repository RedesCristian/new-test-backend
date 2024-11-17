import React from 'react';

function RegisterPage() {
  return (
    <div>
      <h1>REGISTER</h1>
      <form>
        <label>
          Name*
          <input type='text' required />
        </label>
        <label>
          Email*
          <input type='email' required />
        </label>
        <label>
          Password*
          <input type='password' required />
        </label>
        <button type="submit">Register</button>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default RegisterPage;
