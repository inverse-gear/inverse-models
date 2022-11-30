import {InvCompanyBase, uuid} from '.'

export interface InvBlog extends InvCompanyBase {
    StrId: string;
    Title: string;
    ImageUrl: string;
    Description: string;
    Content: string;
    Quote?: string;
    UserId: uuid;
    IsActive: boolean;
}