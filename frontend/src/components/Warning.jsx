import {Link} from 'react-router-dom';
export function Warning({label, to, buttonText}) {
    return <div>
        <span>
            {label}
        </span>
        <Link className='ml-1 underline cursor-pointer' to={to}>{buttonText}</Link>
    </div>
}