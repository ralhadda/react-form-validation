import { useRef, useState } from "react";

export function RefForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [emailErrorsResult, setEmailErrorsResult] = useState([]);
  const [passwordErrorsResults, setPasswordErrorsResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const emailErrors = [];
    const passwordErrors = [];
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length === 0) {
      emailErrors.push("Required");
    }

    if (!email.endsWith("@yahoo.com")) {
      emailErrors.push("Must end with @yahoo.com");
    }

    if (password.length < 10) {
      passwordErrors.push("Must be at least 10 characters");
    }

    if (!password.match(/[a-z]/)) {
      passwordErrors.push("Must include at least 1 lowercase letter");
    }

    if (!password.match(/[A-Z]/)) {
      passwordErrors.push("Must include at least 1 uppercase letter");
    }

    if (!password.match(/[0-9]/)) {
      passwordErrors.push("Must include at least 1 number");
    }

    setEmailErrorsResult(emailErrors);
    setPasswordErrorsResults(passwordErrors);

    if (emailErrors.length === 0 && passwordErrors.length === 0) {
      alert("Success");
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div
        className={`form-group ${emailErrorsResult.length > 0 ? "error" : ""}`}
      >
        <label className='label' htmlFor='email'>
          Email
        </label>
        <input className='input' type='email' id='email' ref={emailRef} />
        {emailErrorsResult.length > 0 && (
          <div className='msg'>{emailErrorsResult.join(", ")}</div>
        )}
      </div>
      <div
        className={`form-group ${
          passwordErrorsResults.length > 0 ? "error" : ""
        }`}
      >
        <label className='label' htmlFor='password'>
          Password
        </label>
        <input
          className='input'
          type='password'
          id='password'
          ref={passwordRef}
        />
        {passwordErrorsResults.length > 0 && (
          <div className='msg'>{passwordErrorsResults.join(", ")}</div>
        )}
      </div>
      <button className='btn' type='submit'>
        Submit
      </button>
    </form>
  );
}
