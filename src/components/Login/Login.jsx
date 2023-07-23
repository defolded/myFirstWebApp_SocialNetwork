import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Email" name="email" component="input" />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component="input"
          type="password"
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" /> remember
        me
      </div>
      {props.error && (
        <div className={styles.errorMessage}>
          <h4>{props.error}</h4>
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.state.isAuth) {
    return <Navigate to={"/posts"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
