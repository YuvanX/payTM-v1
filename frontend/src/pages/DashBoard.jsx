
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function DashBoard() {
    return <div>
        <AppBar username={"User"} icon={"U"}/>
        <Balance Balance={"Rs 5000"}/>
        <Users/>
    </div>
}