import {InvCompanyBase, uuid} from '.'

export interface InvMessage extends InvCompanyBase {
    Name: string;
    LastName?: string;
    Email: string;
    Phone: string;
    Subject?: string;
    Message: string;
    UserId: uuid;
}