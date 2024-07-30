"use client";
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
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
            const response = await axios.post('/api/auth/register', formData);
            console.log(response.data.message);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={handleChange} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
