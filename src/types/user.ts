export type UserRole = 'admin' | 'editor' | 'viewer';

export interface AuthUser {
    id: string;
    email: string;
    role: UserRole;
}

export interface MockUser {
    id: string;
    email: string;
    password: string;
    role: UserRole;
}