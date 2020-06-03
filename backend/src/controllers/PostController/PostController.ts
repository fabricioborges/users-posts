import { Request, Response, json } from 'express';
import UserService from '../../services/user-service/UserService';
import PostService from '../../services/post-service/PostService';
import IUser from '../../services/user-service/IUser';
import IPost from '../../services/post-service/IPost';

interface IPostUser {
    user: IUser;
    posts: IPost;
}

export default {
    async index(req: Request, res: Response) {
        const userService = new UserService();
        const postService = new PostService()

        const users = await userService.getUsers();

        const posts = await postService.getPosts(users.map(user => user.id));

        const postsUsers: IPostUser[] = [];

        posts.forEach(post => {
            const timeline: IPostUser = {
                user: users.filter(user => user.id == post.userId)[0],
                posts: post
            };

            postsUsers.push(timeline);
        })

        return res.json(postsUsers);
    }
}