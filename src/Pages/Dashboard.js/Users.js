import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const Users = () => {
    //react quary
    const { data: users, isLoading,refetch} = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));

    //(is loding , loding sommossa)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='justify-center'>
            <h2 className='text-center text-blue-700 text-2xl'>All User: {users.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {/* atai repet korbo */}


                        {//1. pothome component ani
                        //2.ar por map kori

                            users.map(user => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;