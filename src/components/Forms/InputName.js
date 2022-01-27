import { useState } from "react";
import Post from "../../Post";

const InputName = () => {
    const[NameUser, setNameUser] = useState('');
    Post.office.name = NameUser;
    return (
        <div>
            <input
                type="text"
                placeholder="Имя"
                className="NamePost"
                value={NameUser}
                onChange={event => setNameUser(event.target.value)} />
        </div>
    )
}
export default InputName;