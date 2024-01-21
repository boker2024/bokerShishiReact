import { useState } from "react";
import { addCourse } from "./courseApi";
import { useDispatch } from "react-redux";
import { addCourseToClient } from "./courseSlice";
import { useForm } from "react-hook-form";
import "./AddCourseHookForm.css";

const AddCourseWithHookForm = () => {

    let { register, handleSubmit, formState: { errors ,dirtyFields,isDirty,isValid} } = useForm({
        mode: "all",
        defaultValues: {
            name: "sara"

        }
    });
    let dispatch = useDispatch()


    const save = async (data) => {

        //היינו צריכים להפעיל המון בדיקות תקינות בשביל לחסוך קיראות לשרת שיבדוק הוא
        //רק אם הכל נראה תקין
        //נשלח לשרת
        console.log(data);
        // try {

        //     let res = await addCourse(data)
        //     dispatch(addCourseToClient(res.data))
        //     alert("ההוספה הצליחה")
        // }

        // catch (err) {
        //     console.log(err)
        //     alert("ההוספה נכשלה")
        // }
    }
    console.log(errors)

    return (<form onSubmit={handleSubmit(save)}>

        <label>שם</label>
        <input type="text" {...register("name", { required: { value: true, message: "שם הוא שדה חובה" } })} />
        {errors.name && <span className="error-msg" >{errors.name.message}</span>}
        <label>מחיר</label>
        <input type="number" {...register("price", { min: { value: 20, message: "מחיר נמוך מתחת ל-20מדי" }, max: { value: 800, message: "מחיר מעל 800" } })} />
        {errors.price && <span className="error-msg" >{errors.price.message}</span>}
        <label>מספר שיעורים</label>
        <input type="text" {...register("numLessons", { pattern: { value: /^[0-9]{0,9}$/, message: "לא היה בתבנית הנכונה" } })} />
        {errors.numLessons && <span className="error-msg" >{errors.numLessons.message}</span>}

        <input type="submit" disabled={!isValid}/>


    </form>);
}

export default AddCourseWithHookForm;