import { useState } from "react";
import { addCourse } from "./courseApi";
import { useDispatch } from "react-redux";
import { addCourseToClient } from "./courseSlice";

const AddCourse = () => {

    let [emptyCourse, setEmptyCourse] = useState({
        name: undefined,
        price: 0,
        numLessons: 0,
        speaker: { name: "ttt", startDate: new Date(2000, 10, 10) },

    })
    let dispatch = useDispatch()

    const change = (e) => {

        let { name, type, value } = e.target;
        setEmptyCourse({ ...emptyCourse, [name]: value })
    }
    const save = async (e) => {
        e.preventDefault();
        //היינו צריכים להפעיל המון בדיקות תקינות בשביל לחסוך קיראות לשרת שיבדוק הוא
        //רק אם הכל נראה תקין
        //נשלח לשרת
        console.log(emptyCourse);
        try {


            let res = await addCourse(emptyCourse)
            dispatch(addCourseToClient(res.data))
            alert("ההוספה הצליחה")
        }

        catch (err) {
            console.log(err)
            alert("ההוספה נכשלה")
        }
    }

    return (<form onSubmit={save}>


        <label>שם</label>
        <input name="name" onChange={change} type="text" />
        <label>מחיר</label>
        <input name="price" onChange={change} type="text" />
        <label>מספר שיעורים</label>
        <input name="numLessons" onChange={change} type="text" />
        <label>שם מרצה</label>
        <input name="speaker.name" onChange={change} type="text" />
        <label> תאריך התחלת  עבודה של המרצה</label>
        <input name="speaker.startDate" onChange={change} type="date" />
        <input type="submit" />


    </form>);
}

export default AddCourse;