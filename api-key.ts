import {InvCompanyBase, Role, uuid} from "."

export interface InvApiKey extends InvCompanyBase {
    CompanyId: uuid,
    Name?: string,
    Key: string,
    Role: Role,
    ExpiresAt: Date,
    IsActive: Boolean,
}