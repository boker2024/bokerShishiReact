import { deleteById } from "./courseApi";
import { useDispatch } from "react-redux";
import { deleteCourseFromClient } from "./courseSlice";

const ListItem = ({ one }) => {
    let dispatch = useDispatch()
    const deleteFromServer = async () => {
        try {
            let res = await deleteById(one._id);
            alert("מחיקה הצליחה")
            dispatch(deleteCourseFromClient(one._id))
        } catch (err) {
            alert("מחיקה נכשלה")
            console.log(err)
        }
    }
    return (<div>
        <h2>{one.name}</h2>
        <h2>{one.price}</h2>
        <h2>{one.numLessons}</h2>
        <input type={"button"} onClick={deleteFromServer} />
    </div>);
}

export default ListItem;