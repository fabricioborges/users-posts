import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import IUser from './IUser';
import './styles.css'
import api from '../../services/api';
import IPost from '../Post/IPost';

interface ITimeLine {
    user: IUser;
    posts: IPost[];
}

interface IParams {
    id: string;
}

const User: React.FC = () => {
    const history = createBrowserHistory();
    const [timeline, setTimeline] = useState<ITimeLine>();

    const params = useParams<IParams>();

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get<ITimeLine>(`/users/${params.id}`);

            setTimeline(response.data);
        }

        loadPosts();
    }, [])

    function handleback() {
        history.push(`/`);
        history.go(0);
    }

    return (
        <div>
            <aside>
                <header>
                    <div className="user-info">
                        <strong>Nome: {timeline?.user.name}</strong><br />
                        <strong>Username: {timeline?.user.username}</strong><br />
                        <strong>Companhia: {timeline?.user.company.name}</strong><br />
                        <button type="button" onClick={handleback}>Voltar</button>
                    </div>
                </header>
            </aside>
            <main>
                <ul>
                    <p>Posts</p>
                    {timeline?.posts.map(post =>
                        <li className="user-item" >
                            <p>{post.title}</p>
                        </li>
                    )}
                </ul>
            </main>
        </div>
    );
}

export default User;