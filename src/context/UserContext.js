import React, { useMemo, useState } from 'react';

export const UserContext = React.createContext('');

export default ({ children }) => {
    const [user, setUser] = useState(() => {
        return localStorage.getItem('user') || '';
    });

    const value = useMemo(() => [user, setUser], [user]);

    return (
        <UserContext.Provider value={value}>{children}</ UserContext.Provider>
    );
};