import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import IPostUser from './IPostUser';
import './styles.css';
import api from '../../services/api';

const Post: React.FC = () => {
    const history = createBrowserHistory();
    const [posts, setPosts] = useState<IPostUser[]>([]);

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get<IPostUser[]>('/posts');

            setPosts(response.data);
        }

        loadPosts();
    }, [])

    function toUser(id: number) {
       history.push(`/user/${id}`);
       history.go(0);
    }

    return (
        <ul>
            {posts.map(post =>
                <li className="user-item" >
                    <header>
                        <div className="user-info">
                            <strong>Nome: <a onClick={() => toUser(post.user.id)}>{post.user.name}</a></strong><br />
                            <strong>Companhia: {post.user.company.name}</strong><br />
                        </div>
                    </header>
                    <p>{post.posts.title}</p>
                </li>
            )}
        </ul>
    );
}

export default Post;