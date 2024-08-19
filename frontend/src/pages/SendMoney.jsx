import { useSearchParams } from "react-router-dom";
import { HeadingComponent } from "../components/HeadingComponent";
import axios from "axios";
import { useState } from "react";

export function SendMoney() {
    const [amount, setAmount] = useState(0)
    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");
    const name = searchParams.get("name")
    return <div className="w-screen h-screen flex justify-center place-items-center bg-slate-300">
        <div className="w-96 h-max border rounded shadow p-8 bg-white">
            <div className="text-center">
                <HeadingComponent text={"Send Money"}/>
            </div>
            <div className="flex mt-14">
                <div className="w-12 h-12 flex justify-center place-items-center bg-green-500 rounded-full text-white">
                    {name[0].toUpperCase()}
                </div>
                <div className="text-2xl font-semibold ml-3 pt-2">
                    {name}
                </div>
            </div>
            <div className="font-semibold text-md">
                Amount (in Rs)
            </div>
            <div className="mt-2">
                <input onChange={(e) => {
                    setAmount(e.target.value)
                }} type="text" placeholder="Enter amount" className="p-2 border rounded w-full" />
            </div>
            <div>
            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/account/transfer", {
                    to: id,
                    amount: amount 
                }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                })
                .then(response => {

                })
            }}  type="button" className="text-white bg-green-500 hover:bg-green-600  font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 w-full mt-4">Initiate Transfer</button>
            </div>
        </div>  
    </div>
}