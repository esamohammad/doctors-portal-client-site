import React from 'react';


const DoctorRow = ({ doctor, index }) => {
    const { name, specialty } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>Avatar</td>

            <td>{name}</td>
            <td>{specialty}</td>

        </tr>
    );
};

export default DoctorRow;

{/* <div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} /> */}
{/* </div>
            </div> */}




{/* <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td> */}