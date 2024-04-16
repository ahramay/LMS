import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type UserState = {
    name: string
    email: string
    _id: string
    user_type: string
    courseCount: number
}

const initialState: UserState = {
    name: '',
    email: '',
    _id: '',
    user_type: '',
    courseCount: 0,
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.email = action.payload.email
            state.name = action.payload.name
            state._id = action.payload._id
            state.user_type = action.payload.user_type
            state.courseCount = action.payload.courseCount
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
