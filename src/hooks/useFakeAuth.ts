import useLocalStorage from "./useLocalStorage";


const useFakeAuth = () => {
    const { storedValue ,setValue } = useLocalStorage("user");

    const signIn = (data: any, cb: Function) => {
        setValue(data)
        setTimeout(cb, 200);
    }
    const signOut = (cb:Function) => {
        setValue(null)
        setTimeout(cb, 200);
    }

    return {
        signIn,
        signOut,
        data: storedValue
    }
}

export default useFakeAuth;