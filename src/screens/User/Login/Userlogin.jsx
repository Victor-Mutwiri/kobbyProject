import { useState } from 'react';

const Userlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate login process
        setTimeout(() => {
            alert('Welcome, Developer!');
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="devlogin-container">
            <h1 className="devlogin-title">User Login</h1>
            <form className="devlogin-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="devlogin-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Userlogin;
