import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userPayload = {
    firstName: string
    lastName: string
    middleName:string
    email: string
    userName: string
    password: string
    profilePic:any | null
    role:Array<string | number>
}

const initialState: userPayload = {
    firstName: '',
    lastName: '',
    middleName:'',
    email: '',
    userName: '',
    password: '',
    profilePic: null,
    role:[],
}

const createUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        newUser: (state, action: PayloadAction<userPayload>)=>{
             state.firstName = action.payload.firstName;
             state.lastName = action.payload.lastName;
             state.middleName = action.payload.middleName;
             state.email = action.payload.email;
             state.userName = action.payload.userName;
             state.profilePic = action.payload.profilePic;
             state.role = action.payload.role;
        },
    },
})

export const { newUser } = createUserSlice.actions
export default createUserSlice.reducer