import Badge from "../models/Badge";
import { useState, useEffect } from "react";
import { BadgeType } from "../enums/BadgeType";

export default function useBadgeList(): Array<Badge> {
    const[badgeList, setBadgeList] = useState(new Array<Badge>());
    useEffect(() => {
        const badgeList = [ 
            { id: 1, name: "At Bat", type: BadgeType.Corporate, path: "badgeimage2.png" }, 
            { id: 2, name: "Close Business", type: BadgeType.Corporate, path: "badgeimage3.png" }, 
            { id: 3, name: "Consultant of the Quarter", type: BadgeType.Corporate, path: "badgeimage8.png" }, 
            { id: 4, name: "Consultant of the Year", type: BadgeType.Corporate, path: "badgeimage9.png" }, 
            { id: 5, name: "Mentorship Program - Mentor", type: BadgeType.Corporate, path: "badgeimage6.png" }, 
            { id: 6, name: "Mentorship Program - Mentee", type: BadgeType.Corporate, path: "badgeimage7.png" }, 
            { id: 7, name: "One Year of Service", type: BadgeType.Corporate, path: "badgeimage21.png" }, 
            { id: 8, name: "Three Years of Service", type: BadgeType.Corporate, path: "badgeimage22.png" }, 
            { id: 8, name: "Three Years of Service", type: BadgeType.Corporate, path: "badgeimage22.png" }, 
            { id: 8, name: "Five Years of Service", type: BadgeType.Corporate, path: "badgeimage23.png" }, 
            { id: 8, name: "Ten Years of Service", type: BadgeType.Corporate, path: "badgeimage24.png" }, 
            { id: 8, name: "Fifteen Years of Service", type: BadgeType.Corporate, path: "badgeimage25.png" }, 
            { id: 8, name: "Twenty Years of Service", type: BadgeType.Corporate, path: "badgeimage28.png" }, 
            { id: 8, name: "Twentyfive Years of Service", type: BadgeType.Corporate, path: "badgeimage29.png" }, 
            { id: 8, name: "Magenic Masters Proctor", type: BadgeType.Corporate, path: "badgeimage4.png" }, 
            { id: 8, name: "Magenic Masters Graduate", type: BadgeType.Corporate, path: "badgeimage5.png" }, 
            { id: 8, name: "Magenic Masters TA", type: BadgeType.Corporate, path: "badgeimage73.png" },
            { id: 8, name: "MMO Contributor", type: BadgeType.Corporate, path: "badgeimage85.png" },
            { id: 8, name: "Kudos", type: BadgeType.Community, path: "badgeimage.png" },
            { id: 8, name: "Skills Inventory", type: BadgeType.Community, path: "badgeimage1.png" }
        ];
        setBadgeList(badgeList);
    }, []);
    return badgeList;
}