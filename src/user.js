"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUser = void 0;
const initUser = (user) => {
    user.age = user.age ? user.age * 8 : 10;
    // user.name = user.name ? `mr. ${user.name}`: 'אורח';
    user.name = `mr. ${user.name || 'אורח'}`;
    return {
        name: user.name,
        lastName: user.lastName || '🫡',
        age: user.age,
        role: user.role || '',
        // ...user
    };
};
exports.initUser = initUser;
