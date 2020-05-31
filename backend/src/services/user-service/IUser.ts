interface IUser {
    id: number;
    name: string;
    username: string;
    company: ICompany
}

interface ICompany {
    name: string;
}

export default IUser;