import { useEffect, useState } from "react";
import { SubUser } from "./SubUser";
import axios from "axios";

export function Users({onChange}) {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
       axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token") 
            }
       })
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <div className="p-4 ">
        <div className="text-xl font-bold">
            Users
        </div>
        <div className="mt-4">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="border w-full p-2 rounded" />
        </div>

        <div>
            {users.map(function(user) {
                return <SubUser username={user.firstName} key={user._id} icon={user.firstName[0]} user={user}/>
            })}
        </div>
    </div>
}