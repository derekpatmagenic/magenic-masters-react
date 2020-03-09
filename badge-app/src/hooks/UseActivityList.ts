import Activity from "../models/Activity";
import { useState, useEffect } from "react";

export default function useActivityList(): Array<Activity> {
    const[activityList, setActivityList] = useState(new Array<Activity>());
    useEffect(() => {
        const activityList = [
            { id: 1, name: "Referred Business", badgeId: 19 },
            { id: 2, name: "Closed Deal", badgeId: 2 },
            { id: 3, name: "Acted as a mentor", badgeId: 5 },
            { id: 4, name: "Acted as a mentee", badgeId: 6 },
            { id: 5, name: "Consultant of the quarter", badgeId: 3 },
            { id: 6, name: "Consultant of the year", badgeId: 4 },
            { id: 7, name: "Referred Employee" },
            { id: 8, name: "Magenic MVP", badgeId: 19 },
            { id: 9, name: "Microsoft MVP", badgeId: 19 },
            { id: 10, name: "QA Certification", badgeId: 19 },
            { id: 11, name: "Spoke at an event", badgeId: 19 },
            { id: 12, name: "Kudos", badgeId: 19 },
            { id: 13, name: "One year of service", badgeId: 8 },
            { id: 14, name: "Three years of service", badgeId: 9 },
            { id: 15, name: "Five years of service", badgeId: 10 },
            { id: 16, name: "Ten years of service", badgeId: 11 },
            { id: 17, name: "Fifteen years of service", badgeId: 12 },
            { id: 18, name: "Twenty years of service", badgeId: 13 },
            { id: 19, name: "Twentyfive years of service", badgeId: 14 }
        ];
        setActivityList(activityList);
    }, []);
    return activityList;
}