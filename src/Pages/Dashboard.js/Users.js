import React from 'react';
import { useQuery } from 'react-query';


const Users = () => {
    //react quary
    const { data:users } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    return (
        <div className='justify-center'>
            <h2 className='text-center text-blue-700 text-2xl'>All User: {users.lenth} </h2>
        </div>
    );
};

export default Users;