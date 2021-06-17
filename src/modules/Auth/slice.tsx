import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import {User} from './auth.types'


// Define a type for the slice state
interface AuthReducerState {
    user: User
}

// Define the initial state using that type
const initialState: AuthReducerState = {
    user: {
        name: "",
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = {
                name: action.payload.name
            }
        },
        logout: () => initialState,
    },
})

export const { login,logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer