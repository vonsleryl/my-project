import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Student from './components/Student'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Student />} />
        </Route>
        <Route path="login" element={<div>login page </div>} />
      </Routes>
    </Router>
    )
}

export default App;
