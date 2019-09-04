import { User } from './user.model';

export interface Auth {
    isAuthenticated: boolean;
    user?: User;
}