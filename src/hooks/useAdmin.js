import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    // const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                // setAdminLoading(false);
            })
        }
    }, [user])

    return [admin]
}

export default useAdmin;

//ai porjonto holo nijeke nije admin ghoshonar code ar pore kaj holo ai add min ke requre auth kore felbo ar pore ai hhoks lagbe ..useAdmin use korbe.