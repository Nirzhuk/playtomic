import useLocalStorage from "./useLocalStorage";
import { useAppSelector, useAppDispatch } from './redux'
import { login, logout, selectUser } from "../modules/Auth/slice";
import { User } from "../modules/Auth/auth.types";

const useFakeAuth = () => {
    const { setValue } = useLocalStorage("user");
    const user = useAppSelector(selectUser)

    const dispatch = useAppDispatch()

    const signIn = (data: User, cb: Function) => {
        setValue(data)//Let's keep LocalStorage to simulate the proper browser auth persistant.
        dispatch(login(data))
        setTimeout(cb, 200);
    }
    const signOut = (cb:Function) => {
        setValue(null)
        dispatch(logout())
        setTimeout(cb, 200);
    }

    return {
        signIn,
        signOut,
        data: user
    }
}

export default useFakeAuth;