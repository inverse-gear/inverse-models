import {InvApiKey, InvBase, InvCompanyBase, InvInvite, InvSubscription} from '.'

export enum CompanySettingType {
    email = 'email',
    sms = 'sms',
    discord = 'discord',
}

export interface InvCompany extends InvBase {
    StrId: string;
    Name: string;
    Domain: string;
    Logo?: string
    Favicon?: string
    PrimaryColor?: string
    SecondaryColor?: string
    Phone?: string
    Email?: string
    Address?: string
    Instagram?: string
    Facebook?: string
    Twitter?: string
    IsActive: boolean;

    CompanyLinks: InvCompanyLink[]
    CompanySettings: InvCompanySetting[]
    // Categories: Category[]
    // Products: Product[]
    // Users: User[]
    // Tag: Tag[]
    Invites: InvInvite[]
    // Members: Member[]
    ApiKeys: InvApiKey[]
    // DiscountCodes: DiscountCode[]
    // Instructors: Instructor[]
    // Class: Class[]
    // Event: Event[]
    // Schedule: Schedule[]
    Subscriptions: InvSubscription[]
}

export interface InvCompanyLink extends InvCompanyBase {
    ParentId?: string;
    Name: string;
    Url?: string;
    ShowInFooter: boolean;
    IsActive: boolean;
    OrderBy: number;

    ChildLinks: InvCompanyLink[];
}

export interface InvCompanySetting extends InvCompanyBase {
    Type: CompanySettingType,
    Value?: string,
}