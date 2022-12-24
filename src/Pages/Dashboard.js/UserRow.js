import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            {/* email niye distucturing */}
            <td><button class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs">Remove User</button></td>
            {/* Remove user ata amake korte hobe pore */}
        </tr>
    );
};

export default UserRow;