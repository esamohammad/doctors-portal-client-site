import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email:email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {

                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                })
        }

    }, [user]);
    return [token];
}

export default useToken;


// import { useEffect, useState } from "react";

// const useToken = user => {
//     const [token, setToken] = useState('');
//     useEffect(() => {
//         console.log('user inside useToken', user);
//     }, [user]);
//     return [token];
// }

// export default useToken;


/*
// ===================================
upsert ar kaj ok akhon jwt token suru korbo.
//====================================
*/







