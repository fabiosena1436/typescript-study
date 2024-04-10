type User = {
    id: number;
    username: string;
    password: string;
    createAt: Date;
    updtedAt: Date;
}

const user: User = {
    id: 1,
    username: 'agustinho',
    password: 'tipooe123456',
    createAt: new Date(),
    updtedAt: new Date(),
}

type PartiaUser = Partial<User>;

type NewUser = Omit<User, 'id' | 'username'>;

type ShearshUser = Pick<User, 'username'>;

const shearshUser: ShearshUser = {
    username: 'agosrinho'
}