import {InvCompany, Role} from '.';

export interface Invite extends InvCompany {
    Email: string,
    Code: string,
    Role: Role,
    CreatedAt: Date,
}