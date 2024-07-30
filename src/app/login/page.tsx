"use client";

import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/auth/login', formData);
            console.log(response.data.message);
            // Save the token in local storage or cookies
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
