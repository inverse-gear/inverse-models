import {InvCompanyBase} from '.'

export interface InvFile extends InvCompanyBase {
    Name: string;
    Path: string;
    Path200?: string;
    Path50?: string;

    ProductImages: InvProductImage[]
    Member: InvMember[]
    ClassImages: InvClassImage[]
    Instructor: InvInstructor[]
}