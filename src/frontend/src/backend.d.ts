import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    title: string;
    description: string;
    iconName: string;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface CompanyStats {
    yearsOfExperience: bigint;
    clientsServed: bigint;
    satisfactionRate: bigint;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getCompanyStats(): Promise<CompanyStats>;
    getServices(): Promise<Array<Service>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
