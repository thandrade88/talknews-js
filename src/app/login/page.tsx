'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [ email, setEmail ] = useState('');    
    const [ password, setPassword ] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if(result?.ok) {
            router.push('/admin/dashboard');
        } else {
            console.error(result?.error);
        }        
    }

    return (
        <form onSubmit={handleSubmit} className='p-8 max-w-sm mx-auto'>
            <h2>Talk News</h2>
            <p>Admin Login</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Log In</button>
        </form>
    );
}