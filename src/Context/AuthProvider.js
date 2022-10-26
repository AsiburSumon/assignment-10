import { createContext } from "react";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {user, loading, signIn, };

    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
}

export default AuthProvider;