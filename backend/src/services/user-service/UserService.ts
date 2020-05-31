import axios from 'axios';
import IUser from './IUser';

class UserService {
    async getUsers(){
        const users: IUser[] = await (await axios.get('http://jsonplaceholder.typicode.com/users')).data;

        const usersCompanyGroup = users.filter(user =>
            user.company.name.includes('Group'));

        return usersCompanyGroup
    }
}

export default UserService;