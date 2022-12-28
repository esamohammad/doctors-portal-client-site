import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor,index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageDoctors;
















// import React, { useState } from 'react';
// 

// import DeleteConfirmModal from './DeleteConfirmModal';
// import DoctorRow from './DoctorRow';


    

//     return (
//         <div>
//             <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
//             <div class="overflow-x-auto">
//                 <table class="table w-full">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Avatar</th>
//                             <th>Name</th>
//                             <th>Specialty</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             doctors.map((doctor, index) => <DoctorRow
//                                 key={doctor._key}
//                                 doctor={doctor}
//                                 index={index}
//                                 refetch={refetch}
//                                 setDeletingDoctor={setDeletingDoctor}
//                             ></DoctorRow>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//             {deletingDoctor && <DeleteConfirmModal
//                 deletingDoctor={deletingDoctor}
//                 refetch={refetch}
//                 setDeletingDoctor={setDeletingDoctor}
//             ></DeleteConfirmModal>}
//         </div>
//     );
// };

// export default ManageDoctors;