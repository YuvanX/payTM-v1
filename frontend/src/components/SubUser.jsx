import { useNavigate } from "react-router-dom"

export function SubUser({icon, username, user}) {
    const navigate = useNavigate()
    return <div className="flex justify-between h-10 mt-4">
        <div className="flex pt-4">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex justify-center place-items-center">
                {icon}
            </div>
            <div className="text-xl font-normal pt-1.5 ml-4">
                {username}
            </div>
        </div>
        <div>
        <button onClick={(e) => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`)
        }}   type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 w-full mt-4">Send Money</button>
        </div>
    </div>
}