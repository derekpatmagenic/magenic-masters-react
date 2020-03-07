import Activity from "../models/Activity";
import { useState, useEffect } from "react";

export default function useActivityList(): Array<Activity> {
    const[activityList, setActivityList] = useState(new Array<Activity>());
    useEffect(() => {
        const activityList = [
            { id: 1, name: "Referred Business" },
            { id: 2, name: "Closed Deal" },
            { id: 3, name: "Acted as a mentor" },
            { id: 4, name: "Acted as a mentee" },
            { id: 5, name: "Consultant of the quarter" },
            { id: 6, name: "Consultant of the year" },
            { id: 7, name: "Referred Employee" },
            { id: 8, name: "Magenic MVP" },
            { id: 9, name: "Microsoft MVP" },
            { id: 10, name: "QA Certification" },
            { id: 11, name: "Spoke at an event" },
            { id: 12, name: "Kudos" },
            { id: 13, name: "One year of service" },
            { id: 14, name: "Attended Bacon Club Meeting" },
        ];
        setActivityList(activityList);
    }, []);
    return activityList;
}