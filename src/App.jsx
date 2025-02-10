import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FAQ from './pages/About';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Team from './pages/Team';
import Footer from './components/Footer';
import Register from './pages/Register';
import VolunteerApplication from './pages/Volunteer';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/register" element={<Register />} />
            <Route path="/volunteer" element={<VolunteerApplication />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;