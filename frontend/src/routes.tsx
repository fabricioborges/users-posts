import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Post from './components/Post/Post';
import User from './components/User/User';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Post} />
            <Route path="/user/:id" exact component={User} />
        </BrowserRouter>
    );
}

export default Routes;