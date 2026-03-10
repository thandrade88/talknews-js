import { MockUser, UserRole } from "../../types/user";

const mockUsers: MockUser[] = [
    { 
        id: 'user-001', 
        email: 'admin@talknews.ie', 
        password: 'password123', // Mock unhashed password
        role: 'admin',
    },
    { 
        id: 'user-002', 
        email: 'chef@talknews.ie', 
        password: 'password123', 
        role: 'editor',
    },
    { 
        id: 'user-003', 
        email: 'viewer@talknews.ie', 
        password: 'password123', 
        role: 'viewer'
    },
];

// Simulate query to database
export const findUserByEmail = async (email: string): Promise<MockUser | undefined> => {
    // Simulate database latency
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockUsers.find(user => user.email === email);
};