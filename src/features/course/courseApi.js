import axios from "axios";

let baseUrl = "http://localhost:5000/api/courses";

export const getAllCourses = () => {
    return axios.get(baseUrl);
}

export const getCourseById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}
export const addCourse = (course) => {
    return axios.post(`${baseUrl}`, course);//bodyקריאה של פוסט מקבלת כפרמטר שני את ה
}
export const deleteById=(id)=>{
    return axios.delete(`${baseUrl}/${id}`)
}
