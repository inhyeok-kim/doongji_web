import { atom } from "recoil";

export const AuthState = atom({
    key : 'auth',
    default : {
        id : '',
        token : '',
    } as Auth
});

export interface Auth {
    id : string
    token : string
}