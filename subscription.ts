import {InvCompany, uuid} from '.'

export interface InvSubscription {
    Id: uuid;
    CompanyId: uuid;
    Email: string;
    CreatedAt: Date;

    Company: InvCompany;
}