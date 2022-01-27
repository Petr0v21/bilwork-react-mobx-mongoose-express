import { useState } from "react";
import Post from '../../Post';

const InputPhone = () => {
    const[PhoneUser, setPhoneUser] = useState('');
    Post.office.phone = PhoneUser;
    return (
        <div>
            <input
                type="text"
                placeholder="Номер телефона"
                className="PhonePost"
                value={PhoneUser}
                onChange={event => setPhoneUser(event.target.value)} />
        </div>
    )
}
export default InputPhone;