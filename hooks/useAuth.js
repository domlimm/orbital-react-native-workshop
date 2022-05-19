import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

/**
 * This hook serves as a listener to auth state changes provided by firebase.
 * It returns the authenticated user if he/she is present.
 */
export default useAuth = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        // Mounting function
        const unsubAuthStateChanged = onAuthStateChanged(auth, user => {
            if (user) {
                // User logged in i.e. Authenticated
                setUser(user);
            } else {
                setUser(undefined);
            }
        });

        // Clean up mechanism
        // React performs clean up when component unmounts. In our case,
        // app stops running.
        return unsubAuthStateChanged;
    }, []);

    return user;
};
