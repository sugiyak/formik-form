import React from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:', values);
      if(
        values.email
         && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         && values.password
         ){
           alert("Login Successful")
          };
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
         errors.email = 'Field Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Username should be an email';
          }
      if (!values.password) {
            errors.password = 'Field required';
          }
      return errors;
      

    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>username</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email} </div>: null}
        <div>password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password} </div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
