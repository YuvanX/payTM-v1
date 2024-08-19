import { Button } from "../components/Button";
import { HeadingComponent } from "../components/HeadingComponent";
import { InputComponent } from "../components/InputComponent";
import { SubHeadingComponent } from "../components/SubHeadingComponent";
import { Warning } from "../components/Warning";

export function SignIn() {
    return <div className="flex justify-center bg-slate-300 h-screen place-items-center">
    <div className="p-6 w-96 h-max rounded-lg bg-white">
        <div className="flex justify-center">
            <HeadingComponent text={"Sign In"}/>
        </div>
        <SubHeadingComponent label={"Enter your credentials to access your account"}/>
        <InputComponent label={"Email"} placeholderText={"yuvan@gmail.com"}/>
        <InputComponent label={"Password"} placeholderText={"123456"}/>
        <Button text={"Sign in"}/>
        <div className="flex justify-center">
            <Warning label={"Dont have an account?"} to={"/signup"} buttonText={"Sign up"}/>
        </div>
    </div>
</div>
}