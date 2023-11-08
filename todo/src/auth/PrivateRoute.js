import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config'
import { useEffect, useState } from 'react';


const PrivateRoute=({children})=>{
    const navigate = useNavigate();
    const [user,setUser]=useState();

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }else{
                navigate('/login')
            }
        })

        return ()=> unsubscribe();
    },[auth,navigate])

    return user ? children : null;    
}

export default PrivateRoute 