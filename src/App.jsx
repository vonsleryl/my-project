import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Student from './components/Student';
import Messages from './components/Messages';
import Calendar from './components/Calendar';
import Grades from './components/Grades';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Student />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="grades" element={<Grades />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        <Route path="login" element={<div>login page </div>} />
      </Routes>
    </Router>
  );
}

export default App;
