import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loding';


const Users = () => {
    //react quary
    const { data:users,isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));

    //(is loding , loding sommossa)
    if (isLoading) {
        return <Loading></Loading>
        
    return (
        <div className='justify-center'>
            <h2 className='text-center text-blue-700 text-2xl'>All User: {users.lenth} </h2>
        </div>
    );
};

export default Users;