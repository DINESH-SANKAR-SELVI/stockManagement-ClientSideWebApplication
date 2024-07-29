export interface DataTypes {
}
export interface LoginType {
    userName: string;
    password: string;
}

export interface LoginResponseType {
    password: string,
    role: string[],
    userName: string,
    isAuthendicated: boolean
}

export interface CompanyType {
    companyId: string;
    companyDescriptio: string;
    companyTypeId: string;
    status: string;
    industry: string;
    addressCountry: string;
    foundedDate: Date;
    websiteURL: string;
    addressCity: string;
    addressState: string;
    addressStreet: string;
    companyName: string;
    phone: string;
    revenue: number;
    email: string;
    addressPostalCode: string;
    numberOfEmployees: number;
    ceo: string;
}
