import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
