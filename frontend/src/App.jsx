import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Donor } from './Donor';
import { Recipient } from './Recipient';
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path="/donor-dashboard" element={<Donor></Donor>}/>
                <Route path="/recipient-dashboard" element={<Recipient></Recipient>}/>
            </Routes>
        </Router>
    );
}

export default App;
