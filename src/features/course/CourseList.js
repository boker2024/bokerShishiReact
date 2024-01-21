import { useEffect, useState } from "react";
import { getAllCourses } from "./courseApi";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const CourseList = () => {
    let arr = useSelector(sta => sta.course.arr)

    return (<div>
        <h1>הקורסים שלנו</h1>
        <ul>
            {arr.map(item => <li key={item._id}><ListItem one={item} /></li>)}
        </ul>
    </div>);
}

export default CourseList;