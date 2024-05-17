import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import DonorDashboard from './DonorDashboard';
import Donate from './Donate';
import RecipientDashboard from './RecipientDashboard';
import RequestSupplies from './RequestSupplies';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DonorDashboard />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
                <Route path="/request-supplies" element={<RequestSupplies />} />
            </Routes>
        </Router>
    );
};

export default App;
