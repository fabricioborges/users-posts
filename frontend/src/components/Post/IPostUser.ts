import IUser from "../User/IUser";
import IPost from "./IPost";

interface IPostUser {
    user: IUser;
    posts: IPost;
}

export default IPostUser;