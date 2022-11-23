export type uuid = string;

export interface InvBase {
    Id: uuid,
    CreatedAt: Date,
    UpdatedAt: Date,
}

export interface InvCompanyBase extends InvBase {
    CompanyId: uuid,
}