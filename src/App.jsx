import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Devlogin from './screens/Developer/Login/Devlogin'
import Devlanding from './screens/Developer/Landing/Devlanding'
import Userlogin from './screens/User/Login/Userlogin'
import Userlanding from './screens/User/Landing/Userlanding'
import './App.css'
import ManagerDashboard from './screens/Manager/Landing/ManagerDashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dev" element={<Devlogin/>} />
        <Route path="/projectmanager" element={<ManagerDashboard/>} />
        <Route path="/dev/landing" element={<Devlanding/>} />
        <Route path="/user" element={<Userlogin/>} />
        <Route path="/user/landing" element={<Userlanding/>} />
      </Routes>
    </Router>
  )
}

export default App
