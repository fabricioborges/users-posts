import axios from 'axios';
import IPost from'./IPost';

class PostService {
    async getPosts(ids: number[]){
        const allPosts: IPost[] = await (await axios.get(`http://jsonplaceholder.typicode.com/posts/`)).data;

        const posts = allPosts.filter(post => ids.includes(post.userId));

        return posts;
    }

    async getPost(id: number) {
        const allPosts: IPost[] = await (await axios.get(`http://jsonplaceholder.typicode.com/posts/`)).data;

        const posts = allPosts.filter(post => post.userId === id);

        return posts;
    }
}

export default PostService;