export function Balance({Balance}) {
    return <div className="flex p-4">
        <div className="text-xl font-bold">
            Your Balance
        </div>
        <div className="text-xl font-bold ml-4 ">
            {Balance}
        </div>
    </div>
}