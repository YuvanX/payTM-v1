import { useState } from "react";
import { Button } from "../components/Button";
import { HeadingComponent } from "../components/HeadingComponent";
import { InputComponent } from "../components/InputComponent";
import { SubHeadingComponent } from "../components/SubHeadingComponent";
import { Warning } from "../components/Warning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    return <div className="flex justify-center bg-slate-300 h-screen place-items-center">
    <div className="p-6 w-96 h-max rounded-lg bg-white">
        <div className="flex justify-center">
            <HeadingComponent text={"Sign In"}/>
        </div>
        <SubHeadingComponent label={"Enter your credentials to access your account"}/>
        <InputComponent onChange={(e) => {
            setUsername(e.target.value)
        }} label={"Email"} placeholderText={"yuvan@gmail.com"}/>
        <InputComponent onChange={(e) => {
            setPassword(e.target.value)
        }} label={"Password"} placeholderText={"123456"}/>
        <Button text={"Sign in"} onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
            })
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
        }}/>
        <div className="flex justify-center">
            <Warning label={"Dont have an account?"} to={"/signup"} buttonText={"Sign up"}/>
        </div>
    </div>
</div>
}