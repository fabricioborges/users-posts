import React, {useState, useEffect} from 'react';
import IPostUser from './IPostUser';
import './styles.css';

interface Props {
    posts: IPostUser;
}

const Post: React.FC<Props> = ({ posts }) => {
    return(
        <li className="user-item">
            <header>
                <div className="user-info">
                    <strong>Nome: {posts.user.name}</strong><br />
                    <strong>Companhia: {posts.user.company.name}</strong><br />                    
                </div>
            </header>
            <p>{posts.posts.title}</p>
        </li>
    );
}

export default Post;