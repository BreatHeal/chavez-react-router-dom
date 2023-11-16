import React from 'react'
import { LoginSchema } from '../Validations/UserValidation'

function Login() {
  const LoginUser = async (event) => {
    event.preventDefault()
    let formData = {
        username: event.target[0].value,
        password: event.target[1].value,
    };

    LoginSchema.validate(formData)
    .then(validatedData => {
        const { username } = validatedData;
        window.alert(`User "${username}" Login Succesfully`);
        console.log(formData)
    })
    .catch(validationError => {
        window.alert(validationError.message);
    });
};
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={LoginUser}>
        <label for="username">Username: </label>
        <input type="text" placeholder='Username'/>
        <label for="password">Password: </label>
        <input type="text" placeholder='Password'/>
        <input className='button' type="submit" value="Login"></input>
      </form>
    </div>
  )
}

export default Login
