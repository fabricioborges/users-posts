import React, { useState, useEffect } from 'react';
import './App.css';
import './Global.css';
import './Main.css';
import api from './services/api';
import User from './components/User/User';
import IUser from './components/User/IUser';

interface IPost {
  userId: number,
  id: number;
  title: string;
  body: string;
}

interface IPostUser {
  user: IUser;
  posts: IPost[];
}

function App() {
  const [posts, setPosts] = useState<IPostUser[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get<IPostUser[]>('/');

      setPosts(response.data);
    }

    loadPosts();
  }, [])

  return (
    <div className="App">
      <main>
        <ul>
          {posts.map(post =>
            <User key={post.user.id} user={post.user} />
          )}
        </ul>
      </main>

    </div>
  );
}

export default App;
