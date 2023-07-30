import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.formDiv}>
        <Field placeholder="Email" name="email" component="input" />
      </div>
      <div className={styles.formDiv}>
        <Field
          placeholder="Password"
          name="password"
          component="input"
          type="password"
        />
      </div>
      <div className={styles.formDiv}>
        <Field type="checkbox" name="rememberMe" component="input" /> remember
        me
      </div>
      {props.error && (
        <div className={styles.errorMessage}>
          <h4>{props.error}</h4>
        </div>
      )}
      {props.captchaURL && <img src={props.captchaURL} alt="captcha" />}
      <div className={styles.buttonDiv}>
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
    <div className={styles.wrapper}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
  );
};

export default Login;
