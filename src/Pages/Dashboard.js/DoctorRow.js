import React from 'react';


const DoctorRow = ({ doctor, index }) => {
    const { name, specialty, img } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded-xl">
                        <img src={img} alt={name} />
                    </div></div>
            </td>

            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <button className="btn btn-xs btn-error">Delete</button>
            </td>

        </tr>
    );
};

export default DoctorRow;




