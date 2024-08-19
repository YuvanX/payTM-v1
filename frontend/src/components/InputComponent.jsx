export function InputComponent({label, placeholderText, onChange}) {
    return <div>
        <div className="font-semibold pb-2 pt-4">
            {label}      
        </div>
        <div>
            <input className="border pt-2 pb-2 pl-1 w-full rounded" type="text" placeholder={placeholderText} onChange={onChange}/>
        </div>
    </div>
}