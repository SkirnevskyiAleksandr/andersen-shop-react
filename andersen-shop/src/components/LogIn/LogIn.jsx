import React from 'react';
import ReactDOM from 'react-dom';
import LogInStyle from './LogIn.module.css';

export const LogIn = ({ toggleIsLoginOpen }) => {
    return ReactDOM.createPortal(
        <div div className={`${LogInStyle.loginPage} ${LogInStyle.mainWrapper}`
        }>
            <div className={LogInStyle.form}>
                <form className={LogInStyle.registerForm}>
                    <input typeName="text" placeholder="name" />
                    <input typeName="password" placeholder="password" />
                    <input typeName="text" placeholder="email address" />
                    <button>create</button>
                    <p className={LogInStyle.message}>Already registered? <a href="#">Sign In</a></p>
                </form>
                <form action='#' className={LogInStyle.loginForm}>
                    <input name='username' type="text" placeholder="username" />
                    <input name='password' type="password" placeholder="password" />
                    <button type='submit'>login</button>
                    <button type='button' onClick={toggleIsLoginOpen}>Cancel</button>
                    <p className={LogInStyle.message}>Not registered? <a href="#">Create an account</a></p>
                </form>
                <biv onClick={toggleIsLoginOpen} className={LogInStyle.closeButton}>X</biv>
            </div>
        </div >, document.getElementById('logIn')
    );
}
