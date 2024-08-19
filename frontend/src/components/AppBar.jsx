

export function AppBar({username, icon}) {
    return <div className="flex justify-between p-4 border inline-block align-middle">
            <div className="text-2xl font-bold">
                Payments App
            </div>
            <div className="flex">
                <div className="text-xl font-normal mr-4 pt-1">
                    Hello, {username}
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-200 flex justify-center place-items-center">
                    <div>
                        {icon}
                    </div>
                </div>
            </div>
    </div>
}