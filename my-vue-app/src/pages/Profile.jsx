import React from 'react';
import { useLogin } from '../hooks/useLogin';

export const ProfileFile = () => {
    const username = useLogin()
    return (
        <div>
            <h1>Profile</h1>
            username: {username}
        </div>
    );
}

;