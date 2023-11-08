import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; 

function useAuthentication(auth) {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(null); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsUserAuthenticated(user);
        });

        
        return () => unsubscribe();
    }, [auth]);

    return isUserAuthenticated;
}

export default useAuthentication;
