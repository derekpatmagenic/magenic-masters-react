import { BadgeType } from "../enums/BadgeType";

export default interface Badge {
    id: number,
    name: string,
    tagLine?: string,
    description?: string,
    type: BadgeType,
    path?: string
}