import axios from "axios"
import { useEffect, useState } from "react"

export function Balance() {
    const [amount,setAmount] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setAmount(response.data.balance)
        })
    }, [])

    return <div className="flex p-4">
        <div className="text-xl font-bold">
            Your Balance
        </div>
        <div className="text-xl font-bold ml-4 ">
             ₹ {amount.toFixed(2)}
        </div>
    </div>
}
