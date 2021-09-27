import { Skill } from "./skill.model";

export class Developer {
    lastName: string | undefined;
    firstName : string | undefined;
    age : number | undefined;
    sexe : string | undefined;
    bio : string | undefined;
    public skills: Skill[] = [];
}