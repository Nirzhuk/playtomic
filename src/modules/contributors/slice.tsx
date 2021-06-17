import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Contributor } from './contributors.types'


// Define a type for the slice state
interface AuthReducerState { 
    data: Contributor[]
}

// Define the initial state using that type
const initialState: AuthReducerState = {
    data:[]
}

export const contributorsSlice = createSlice({
    name: 'contributors',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Contributor[]>) => {
            state.data = action.payload;
        }
    },
})

export const { set } = contributorsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectContributor = (state: RootState,login:string) => state.contributors.data.find(contributor => contributor.login === login)

export default contributorsSlice.reducer