import {InvCompany} from './company';

export {InvApiKey} from './api-key';
export {InvBlog} from './blog';
export {InvCompany, InvCompanyLink, InvCompanySetting} from './company';
export {InvFile} from './file';
export {InvInvite} from './invite';
export {InvMessage} from './message';
export {InvOrder, InvOrderItem} from './order';
export {InvSubscription} from './subscription';
export type uuid = string;

export interface InvBase {
    Id: uuid,
    CreatedAt: Date,
    UpdatedAt: Date,
}

export interface InvCompanyBase extends InvBase {
    CompanyId: uuid,

    Company: InvCompany,
}

export enum Role {
    user = 'user',
    admin = 'admin',
    superadmin = 'superadmin',
}