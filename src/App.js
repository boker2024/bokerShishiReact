import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getAllCourses } from "./features/course/courseApi"
import CourseList from './features/course/CourseList';
import AddCourse from './features/course/AddCourse';
import { useDispatch } from "react-redux";
import { saveCoursesInClient } from './features/course/courseSlice';
import AddCourseWithHookForm from './features/course/AddCourse copy';

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    getAllCourses().then(res => {
      console.log(res);
      dispatch(saveCoursesInClient(res.data))
      // alert(" הצליח להביא את הקורסים")

    })
      .catch(err => {
        console.log(err);
        alert("לא הצליח להביא את הקורסים")
      })

  }, [])
  return (
    <div className="App">
      <CourseList />
      <AddCourseWithHookForm />
    </div>
  );
}

export default App;
