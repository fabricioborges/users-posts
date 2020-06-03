import ICompany from './ICompany';

interface IUser {
    id: number;
    name: string;
    username: string;
    company: ICompany
}

export default IUser;
