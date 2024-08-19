import { useState } from "react";
import { Button } from "../components/Button";
import { HeadingComponent } from "../components/HeadingComponent";
import { InputComponent } from "../components/InputComponent";
import { SubHeadingComponent } from "../components/SubHeadingComponent";
import { Warning } from "../components/Warning";
import axios from 'axios'

export function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return <div className="flex justify-center bg-slate-300 h-screen place-items-center">
        <div className="p-6 w-96 h-max rounded-lg bg-white">
            <div className="flex justify-center">
                <HeadingComponent text={"Sign up"}/>
            </div>
            <SubHeadingComponent label={"Enter your information to create an account"}/>

            <InputComponent onChange={e => {
                setFirstName(e.target.value)
            }} label={"First Name"} placeholderText={"Yuvan"}/>
            <InputComponent label={"Last Name"} placeholderText={"Vignesh"} onChange={e => {
                setLastName(e.target.value)
            }}/>
            <InputComponent label={"Email"} placeholderText={"yuvan@gmail.com"} onChange={e => {
                setUsername(e.target.value)
            }}/>
            <InputComponent label={"Password"} placeholderText={"123456"} onChange={e => {
                setPassword(e.target.value)
            }} />

            <Button text={"Sign up"} onClick={async () => {
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    firstName,
                    lastName,
                    password
                });
                localStorage.setItem("token", response.data.token)
            }}/>
            
            <div className="flex justify-center">
                <Warning label={"Already have an account?"} to={"/signin"} buttonText={"Sign in"}/>
            </div>
        </div>
    </div>
}