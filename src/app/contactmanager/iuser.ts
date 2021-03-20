import { INote } from "./inote";

export interface IUser {
    id: number;
    birthDate: Date;
    name: string;
    avatar: string;
    bio: string;

    notes : INote[];
}
