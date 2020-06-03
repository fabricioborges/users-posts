import React, { useState, useEffect } from 'react';
import { useParams, match } from 'react-router-dom'
import IUser from './IUser';
import './styles.css'
import api from '../../services/api';
import IPost from '../Post/IPost';

interface ITimeLine {
    user?: IUser;
    posts?: IPost[];
}

const User: React.FC = () => {
    const [user, setUser] = useState<ITimeLine>({});
    const params = useParams<number>();
    console.log(params)
    const id = params;
    console.log()
    useEffect(() => {
        async function loadPosts() {
            const response = await api.get<ITimeLine>(`/users/${id}`);

            setUser(response.data);
        }

        loadPosts();
    }, [])

    return (
        <div>
            <header>
                <div className="user-info">
                    {/* <strong>Nome: {user.user.name}</strong><br />
                    <strong>Username: {user.username}</strong><br />
                    <strong>Companhia: {user.company.name}</strong><br /> */}
                </div>
            </header>
        </div>
    );
}

export default User;