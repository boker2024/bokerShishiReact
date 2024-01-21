import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    arr: []
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        saveCoursesInClient: (state, action) => {
            state.arr = action.payload
        },
        addCourseToClient: (state, action) => {
            state.arr.push(action.payload)
        },
        deleteCourseFromClient: (state, action) => {
            let index = state.arr.findIndex(item => item._id == action.payload)
            state.arr.splice(index, 1)
        }

    }
});

export const { saveCoursesInClient, addCourseToClient ,deleteCourseFromClient} = courseSlice.actions;
export default courseSlice.reducer;