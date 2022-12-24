import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';


const Users = () => {
    //react quary
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));

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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;