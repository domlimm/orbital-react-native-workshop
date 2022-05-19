import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase';

/**
 * This hook serves as a listener to auth state changes provided by firebase.
 * It returns the authenticated user if he/she is present.
 */
const useAuth = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Mounting function
        const unsubscribeAuthStateChanged = onAuthStateChanged(
            auth,
            (authenticatedUser) => {
                authenticatedUser ? setUser(authenticatedUser) : setUser({});
            }
        );

        // Clean up mechanism
        // React performs clean up when component unmounts. In our case,
        // app stops running.
        return unsubscribeAuthStateChanged;
    }, [user]);

    return user;
};

export default useAuth;
