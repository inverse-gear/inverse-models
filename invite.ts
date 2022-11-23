import {InvCompany, Role} from '.';

export interface InvInvite extends InvCompany {
    Email: string,
    Code: string,
    Role: Role,
    CreatedAt: Date,
}