import {InvCompanyBase, uuid} from "."

export enum Role {
    user = 'user',
    admin = 'admin',
    superadmin = 'superadmin',
}

export interface InvApiKey extends InvCompanyBase {
    CompanyId: uuid,
    Name?: string,
    Key: string,
    Role: Role,
    ExpiresAt: Date,
    IsActive: Boolean,

    // Company?: InvCompany,
}