//jshint esversion:6
import React from 'react';
import '../styles/SignIn.css';
import logo from '../images/logo.png';

function SignIn() {
  return (
    <main class='form-signin'>
      <center>
        <form>
          <img
            class='mb-4'
            src={logo}
            alt='logo'
            styles={{ width: '7', height: '5' }}
          />
          <h1 class='h3 mb-3 fw-normal'>Please sign in</h1>

          <div class='form-floating'>
            <input
              type='text'
              class='form-control'
              id='floatingInput'
              placeholder='name{numbers}'></input>
            <label for='floatingInput'>Username</label>
          </div>
          <div class='form-floating'>
            <input
              type='password'
              class='form-control'
              id='floatingPassword'
              placeholder='Password'></input>
            <label for='floatingPassword'>Password</label>
          </div>
          <div class='checkbox mb-3'>
            <label>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
          </div>
          <button class='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
          <p class='mt-5 mb-3 text-muted'>&copy; 2021–2022</p>
        </form>
      </center>
    </main>
  );
}

export default SignIn;
