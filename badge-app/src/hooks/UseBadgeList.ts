import Badge from "../models/Badge";
import { useState, useEffect } from "react";
import { BadgeType } from "../enums/BadgeType";

export default function useBadgeList(): Array<Badge> {
    const[badgeList, setBadgeList] = useState(new Array<Badge>());
    useEffect(() => {
        const badgeList = [ 
            { id: 1, name: "Badge 1", type: BadgeType.Corporate, path: "badgeimage.png" }, 
            { id: 2, name: "Badge 2", type: BadgeType.Corporate, path: "badgeimage.png" }, 
            { id: 3, name: "Badge 3", type: BadgeType.Corporate, path: "badgeimage.png" }, 
            { id: 4, name: "Badge 4", type: BadgeType.Corporate, path: "badgeimage.png" }, 
            { id: 5, name: "Badge 5", type: BadgeType.Corporate, path: "badgeimage.png" }, 
            { id: 6, name: "Badge 6", type: BadgeType.Corporate, path: "badgeimage.png" }, 
            { id: 7, name: "Badge 7", type: BadgeType.Corporate, path: "badgeimage.png" }, 
            { id: 8, name: "Badge 8", type: BadgeType.Corporate, path: "badgeimage.png" } 
        ];
        setBadgeList(badgeList);
    }, []);
    return badgeList;
}