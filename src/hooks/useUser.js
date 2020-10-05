import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useUser = () => {
    const [user, setUser] = useContext(UserContext);

    const setNewUser = (value) => {
        setUser(value);
        localStorage.setItem('user', value);
    }

    return [user, setNewUser];
};