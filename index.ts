export {InvApiKey} from './api-key';
export {InvInvite} from './invite';

export type uuid = string;

export interface InvBase {
    Id: uuid,
    CreatedAt: Date,
    UpdatedAt: Date,
}

export interface InvCompany {
    Id: uuid,
    CompanyId: uuid,
}

export interface InvCompanyBase extends InvBase {
    CompanyId: uuid,

    // Company?: InvCompany,
}

export enum Role {
    user = 'user',
    admin = 'admin',
    superadmin = 'superadmin',
}