import { Request, Response, json } from 'express';
import UserService from '../../services/user-service/UserService';
import PostService from '../../services/post-service/PostService';
import IUser from '../../services/user-service/IUser';
import IPost from '../../services/post-service/IPost';

interface IPostUser {
    user: IUser;
    posts: IPost[];
}

export default {
    async index(req: Request, res: Response) {
        const userService = new UserService();
        const postService = new PostService()

        const id = Number.parseInt(req.params.id);

        const user = await userService.getUserById(id);

        const posts = await postService.getPost(user.id);

        const userPosts: IPostUser = { user: user, posts: posts };

        return res.json(userPosts);
    }
}