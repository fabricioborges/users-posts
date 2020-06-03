import React, { useState, useEffect } from 'react';
import IUser from './IUser';

import './styles.css'

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <li className="user-item">
            <header>
                <div className="user-info">
                    <strong>Nome: {user.name}</strong><br />
                    <strong>Username: {user.username}</strong><br />
                    <strong>Companhia: {user.company.name}</strong><br />
                </div>                
            </header>            
        </li>
    );
}

export default User;