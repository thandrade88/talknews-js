// src/components/LogoutButton.tsx
'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        // 1. Call signOut function
        await signOut({ 
            redirect: false // Prevent NextAuth from redirecting automatically
        });
        
        // 2. Redirect manually after successful sign out
        // Redirecting to the homepage or login page after clearing the session is common.
        router.push('/'); 
    };

    return (
        <button 
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800"
        >
            Logout
        </button>
    );
}