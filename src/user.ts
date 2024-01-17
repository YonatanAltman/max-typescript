// enum RoleEnum {
//     admin = 'admin',
//     employee = 'employee',
//     guest ='guest'
// }

type RoleType = 'admin' | 'employee' | 'guest';

interface User {
    name: string;
    lastName: string;
    age: number;
    role: RoleType;

}

interface Employee extends User {
    salary?: number;
}

export const initUser = (user: Partial<User>): User => {
    user.age = user.age ? user.age * 8 : 10;
    // user.name = user.name ? `mr. ${user.name}`: 'אורח';
    user.name = `mr. ${user.name || 'אורח'}`;
    user.role = user.role || 'guest';
    return {
        name: user.name,
        lastName: user.lastName || '🫡',
        age: user.age,
        role: user.role,
        // ...user
    }

}

