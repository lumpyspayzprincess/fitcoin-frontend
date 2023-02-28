// import libraries
import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// creating the component
export default function Signup() {

  //  instansiate navigate
  const navigate = useNavigate()

  // set state of data in form
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  //! copied from last project since I couldn't think of how to improve
  // set state of data in form
  const [errorData, setErrorData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  console.log("Error data here!!", errorData)

  // creating the function to send over the form data via axios

  async function handleSubmit(e: SyntheticEvent) {
    // we need the formData
    // we need to send the data to our API 
    // we need another library for posting the data - axios
    e.preventDefault()
    console.log(newUser)
    try {
      await axios.post(`${baseUrl}/signup`, newUser)
      navigate('/new-workout')
    } catch (err: any) {
      setErrorData(err.response.data.errors)
    }
  }

  function handleChange(e: any) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })

    setErrorData({
      ...errorData,
      [e.target.name]: ""
    })
  }

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input is-rounded"
              type="text"
              name={'email'}
              onChange={handleChange}
              value={newUser.email}
            />
            {errorData.email && <small className="has-text-danger">{errorData.email}</small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input is-rounded"
              type="password"
              name={'password'}
              onChange={handleChange}
              value={newUser.password}
            />
            {errorData.password && <small className="has-text-danger">{errorData.password}</small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm password</label>
          <div className="control">
            <input
              className="input is-rounded"
              type="password"
              name={'passwordConfirmation'}
              onChange={handleChange}
              value={newUser.passwordConfirmation}
            />
            {errorData.passwordConfirmation && <small className="has-text-danger">{errorData.passwordConfirmation}</small>}
          </div>
        </div>
        <button className="button is-rounded">Submit</button>
      </form>
    </div>
  </div>
}
