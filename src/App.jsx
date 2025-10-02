
import { BrowserRouter as Router, Route, Routes } from "react-router";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from "./pages/Courses";

const App = () => {
  return (
    // <Router>
      // <Navbar className="fixed top-0 left-0 right-0 z-50 w-full" />
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/courses" element={<Courses/>} />
        <Route path = "/about" element={<About/>} />
        <Route path = "/contact" element={<Contact/>} />
      </Routes>
      // <Footer />
    // </Router>
  )
}

export default App
