import React, { useState, useEffect } from 'react';
import './App.css';
import './Global.css';
import './Main.css';
import api from './services/api';
import User from './components/User/User';
import IUser from './components/User/IUser';
import IPost from './components/Post/IPost';
import IPostUser from './components/Post/IPostUser';
import Post from './components/Post/Post';


function App() {
  const [posts, setPosts] = useState<IPostUser[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get<IPostUser[]>('/posts');
      console.log(response.data);
      setPosts(response.data);
    }

    loadPosts();
  }, [])

  return (
    <div className="App">
      <main>
        <ul>
          {posts.map(post =>
            <Post key={post.posts.id} posts={post} />
          )}
        </ul>
      </main>

    </div>
  );
}

export default App;
