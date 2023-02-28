//  import libaries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


// import files that I made
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Signup from "./components/Signup"
import Login from "./components/Login"


// need to add conditional navbar options to that signup and login does not show up when the token is available and logout is shown

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/creating-a-workout" element={<HowTo />} /> */}
      {/* <Route path="/rewards-on-offer" element={<Rewards />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
    </Routes>
  </Router>
  )
}

export default App
