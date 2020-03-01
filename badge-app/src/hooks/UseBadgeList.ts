import Badge from "../models/Badge";

export default function useBadgeList(): Badge[] {
    
    return [ 
        { id: 1, name: "Badge 1", path: "badgeimage.png" }, 
        { id: 2, name: "Badge 2", path: "badgeimage.png" }, 
        { id: 3, name: "Badge 3", path: "badgeimage.png" }, 
        { id: 4, name: "Badge 4", path: "badgeimage.png" }, 
        { id: 5, name: "Badge 5", path: "badgeimage.png" }, 
        { id: 6, name: "Badge 6", path: "badgeimage.png" }, 
        { id: 7, name: "Badge 7", path: "badgeimage.png" }, 
        { id: 8, name: "Badge 8", path: "badgeimage.png" } 
    ];
}