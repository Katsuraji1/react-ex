import React, {useContext} from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

function Login() {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    } 

    return ( 
        <div>
            <form onSubmit={login}>
                <MyInput type = 'text' placeholder = 'Введите логин'></MyInput>
                <MyInput type = 'password' placeholder = 'Введите пароль' autoComplete = 'on'></MyInput>
                <MyButton>Введите пароль</MyButton>
            </form>
        </div>
    );
}

export default Login;