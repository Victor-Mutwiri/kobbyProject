import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Issue Tracker</h1>
          <p className="hero-description">
            A comprehensive platform to log, track, and manage issues seamlessly. 
            Whether you're an employee, project manager, or developer, streamline 
            your workflow with ease.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </header>
      <main className="features-section">
        <h2 className="section-title">Why Choose Issue Tracker?</h2>
        <div className="features">
          <div className="feature">
            <h3>User-Friendly Interface</h3>
            <p>Log and track issues effortlessly with an intuitive platform designed for all users.</p>
          </div>
          <div className="feature">
            <h3>Effective Collaboration</h3>
            <p>Bridge the gap between employees, managers, and developers for efficient issue resolution.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Updates</h3>
            <p>Stay informed with real-time progress tracking and notifications.</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 Issue Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
